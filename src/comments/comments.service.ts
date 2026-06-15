import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CommentReaction } from './entities/comment-reaction.entity';
import { PostReaction } from './entities/post-reaction.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CreateReactionDto } from './dto/create-reaction.dto';
import { buildPaginationMeta } from '../common/dto/pagination.dto';
import { Role } from '../common/enums/role.enum';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private repo: Repository<Comment>,
    @InjectRepository(CommentReaction) private commentReactionRepo: Repository<CommentReaction>,
    @InjectRepository(PostReaction) private postReactionRepo: Repository<PostReaction>,
  ) {}

  // ─── Comments ────────────────────────────────────────────────────

  async findAllByPost(postId: number, page = 1, limit = 10) {
    const [raw, total] = await this.repo
      .createQueryBuilder('comment')
      .leftJoinAndSelect('comment.user', 'user')
      .where('comment.postId = :postId', { postId })
      .andWhere('comment.parentId IS NULL')
      .andWhere('comment.isActive = true')
      .orderBy('comment.createdAt', 'ASC')
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    const items = await Promise.all(
      raw.map(async (c) => {
        const replyCount = await this.repo.count({ where: { parentId: c.id, isActive: true } });
        const reactions = await this.getCommentReactionCounts(c.id);
        return { ...this.toPublicComment(c), replyCount, reactions };
      }),
    );

    return { items, meta: buildPaginationMeta(page, limit, total) };
  }

  async findReplies(commentId: number) {
    const replies = await this.repo
      .createQueryBuilder('comment')
      .leftJoinAndSelect('comment.user', 'user')
      .where('comment.parentId = :commentId', { commentId })
      .andWhere('comment.isActive = true')
      .orderBy('comment.createdAt', 'ASC')
      .getMany();

    return Promise.all(
      replies.map(async (c) => {
        const reactions = await this.getCommentReactionCounts(c.id);
        return { ...this.toPublicComment(c), replyCount: 0, reactions };
      }),
    );
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
      authorName  = dto.authorName?.trim() || 'Khách';
      authorEmail = dto.authorEmail;
    }

    const saved = await this.repo.save(
      this.repo.create({
        postId,
        userId,
        authorName,
        authorEmail,
        content:  dto.content,
        parentId: dto.parentId ?? null,
        isActive: true,
      }),
    );

    const full = await this.repo
      .createQueryBuilder('comment')
      .leftJoinAndSelect('comment.user', 'user')
      .where('comment.id = :id', { id: saved.id })
      .getOne();

    return { ...this.toPublicComment(full), replyCount: 0, reactions: [] };
  }

  async update(id: number, dto: UpdateCommentDto, currentUser: { id: number; role: string }) {
    const comment = await this.findById(id);
    const isAdmin = [Role.ADMIN, Role.SUPER_ADMIN].includes(currentUser.role as Role);
    const isOwner = comment.userId === currentUser.id;

    if (!isAdmin && !isOwner) throw new ForbiddenException('You can only edit your own comments');
    if (dto.isActive !== undefined && !isAdmin) throw new ForbiddenException('Only admins can moderate comments');

    Object.assign(comment, dto);
    return this.repo.save(comment);
  }

  async remove(id: number, currentUser: { id: number; role: string }) {
    const comment = await this.findById(id);
    const isAdmin = [Role.ADMIN, Role.SUPER_ADMIN].includes(currentUser.role as Role);
    const isOwner = comment.userId === currentUser.id;

    if (!isAdmin && !isOwner) throw new ForbiddenException('You can only delete your own comments');

    await this.repo.remove(comment);
    return { message: 'Comment deleted' };
  }

  private async findById(id: number): Promise<Comment> {
    const comment = await this.repo.findOne({ where: { id } });
    if (!comment) throw new NotFoundException('Comment not found');
    return comment;
  }

  private toPublicComment(c: Comment) {
    return {
      id:           c.id,
      postId:       c.postId,
      parentId:     c.parentId ?? null,
      userId:       c.userId ?? null,
      authorName:   c.authorName,
      authorAvatar: c.user?.media ?? null,
      content:      c.content,
      isActive:     c.isActive,
      createdAt:    c.createdAt,
    };
  }

  // ─── Comment Reactions ───────────────────────────────────────────

  async getCommentReactionCounts(commentId: number) {
    const rows = await this.commentReactionRepo
      .createQueryBuilder('r')
      .select('r.emoji', 'emoji')
      .addSelect('COUNT(*)', 'count')
      .where('r.commentId = :commentId', { commentId })
      .groupBy('r.emoji')
      .getRawMany();
    return rows.map((r) => ({ emoji: r.emoji, count: Number(r.count) }));
  }

  async toggleCommentReaction(commentId: number, dto: CreateReactionDto, currentUser?: { id: number }) {
    if (!currentUser && !dto.guestKey) {
      throw new BadRequestException('guestKey is required for guest reactions');
    }

    const where: any = { commentId };
    if (currentUser) where.userId = currentUser.id;
    else where.guestKey = dto.guestKey;

    const existing = await this.commentReactionRepo.findOne({ where });

    if (existing) {
      if (existing.emoji === dto.emoji) {
        await this.commentReactionRepo.remove(existing);
      } else {
        existing.emoji = dto.emoji;
        await this.commentReactionRepo.save(existing);
      }
    } else {
      await this.commentReactionRepo.save(
        this.commentReactionRepo.create({
          commentId,
          userId:   currentUser?.id ?? null,
          guestKey: dto.guestKey ?? null,
          emoji:    dto.emoji,
        }),
      );
    }

    return this.getCommentReactionCounts(commentId);
  }

  // ─── Post Reactions ──────────────────────────────────────────────

  async getPostReactionCounts(postId: number) {
    const rows = await this.postReactionRepo
      .createQueryBuilder('r')
      .select('r.emoji', 'emoji')
      .addSelect('COUNT(*)', 'count')
      .where('r.postId = :postId', { postId })
      .groupBy('r.emoji')
      .getRawMany();
    return rows.map((r) => ({ emoji: r.emoji, count: Number(r.count) }));
  }

  async togglePostReaction(postId: number, dto: CreateReactionDto, currentUser?: { id: number }) {
    if (!currentUser && !dto.guestKey) {
      throw new BadRequestException('guestKey is required for guest reactions');
    }

    const where: any = { postId };
    if (currentUser) where.userId = currentUser.id;
    else where.guestKey = dto.guestKey;

    const existing = await this.postReactionRepo.findOne({ where });

    if (existing) {
      if (existing.emoji === dto.emoji) {
        await this.postReactionRepo.remove(existing);
      } else {
        existing.emoji = dto.emoji;
        await this.postReactionRepo.save(existing);
      }
    } else {
      await this.postReactionRepo.save(
        this.postReactionRepo.create({
          postId,
          userId:   currentUser?.id ?? null,
          guestKey: dto.guestKey ?? null,
          emoji:    dto.emoji,
        }),
      );
    }

    return this.getPostReactionCounts(postId);
  }
}
