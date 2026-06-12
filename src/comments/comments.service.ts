import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { buildPaginationMeta } from '../common/dto/pagination.dto';
import { Role } from '../common/enums/role.enum';

@Injectable()
export class CommentsService {
  constructor(@InjectRepository(Comment) private repo: Repository<Comment>) {}

  async findAllByPost(postId: number, page = 1, limit = 10, includeInactive = false) {
    const query = this.repo
      .createQueryBuilder('comment')
      .leftJoinAndSelect('comment.user', 'user')
      .where('comment.postId = :postId', { postId })
      .orderBy('comment.createdAt', 'ASC')
      .skip((page - 1) * limit)
      .take(limit);

    if (!includeInactive) {
      query.andWhere('comment.isActive = true');
    }

    const [raw, total] = await query.getManyAndCount();
    const items = raw.map(c => this.toPublicComment(c));
    return { items, meta: buildPaginationMeta(page, limit, total) };
  }

  private toPublicComment(c: Comment) {
    return {
      id:           c.id,
      postId:       c.postId,
      userId:       c.userId,
      authorName:   c.authorName,
      authorAvatar: c.user?.media ?? null,
      content:      c.content,
      isActive:     c.isActive,
      createdAt:    c.createdAt,
    };
  }

  async create(postId: number, dto: CreateCommentDto, currentUser?: { id: number; name: string; email: string }) {
    let authorName: string;
    let authorEmail: string | undefined;
    let userId: number | undefined;

    if (currentUser) {
      authorName  = currentUser.name;
      authorEmail = currentUser.email;
      userId      = currentUser.id;
    } else {
      if (!dto.authorName?.trim()) {
        throw new BadRequestException('authorName is required for guest comments');
      }
      authorName  = dto.authorName.trim();
      authorEmail = dto.authorEmail;
    }

    const saved = await this.repo.save(
      this.repo.create({ postId, userId, authorName, authorEmail, content: dto.content, isActive: true }),
    );
    const full = await this.repo
      .createQueryBuilder('comment')
      .leftJoinAndSelect('comment.user', 'user')
      .where('comment.id = :id', { id: saved.id })
      .getOne();
    return this.toPublicComment(full);
  }

  async update(id: number, dto: UpdateCommentDto, currentUser: { id: number; role: string }) {
    const comment = await this.findById(id);
    const isAdmin = [Role.ADMIN, Role.SUPER_ADMIN].includes(currentUser.role as Role);
    const isOwner = comment.userId === currentUser.id;

    if (!isAdmin && !isOwner) {
      throw new ForbiddenException('You can only edit your own comments');
    }
    // Only admins can change isActive
    if (dto.isActive !== undefined && !isAdmin) {
      throw new ForbiddenException('Only admins can moderate comments');
    }

    Object.assign(comment, dto);
    return this.repo.save(comment);
  }

  async remove(id: number, currentUser: { id: number; role: string }) {
    const comment = await this.findById(id);
    const isAdmin = [Role.ADMIN, Role.SUPER_ADMIN].includes(currentUser.role as Role);
    const isOwner = comment.userId === currentUser.id;

    if (!isAdmin && !isOwner) {
      throw new ForbiddenException('You can only delete your own comments');
    }

    await this.repo.remove(comment);
    return { message: 'Comment deleted' };
  }

  private async findById(id: number): Promise<Comment> {
    const comment = await this.repo.findOne({ where: { id } });
    if (!comment) throw new NotFoundException('Comment not found');
    return comment;
  }
}
