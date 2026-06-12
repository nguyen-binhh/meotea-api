import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private repo: Repository<Post>) {}

  async findAll(onlyActive = true) {
    return this.repo.find({
      where: onlyActive ? { isActive: true } : {},
      order: { createdAt: 'DESC' },
    });
  }

  async findBySlug(slug: string) {
    const post = await this.repo.findOne({ where: { slug } });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async findById(id: number) {
    const post = await this.repo.findOne({ where: { id } });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async create(dto: CreatePostDto) {
    const slug = await this.generateUniqueSlug(dto.title);
    const post = this.repo.create({ ...dto, slug });
    return this.repo.save(post);
  }

  async update(id: number, dto: UpdatePostDto) {
    const post = await this.findById(id);
    if (dto.title && dto.title !== post.title) {
      post.slug = await this.generateUniqueSlug(dto.title, id);
    }
    Object.assign(post, dto);
    return this.repo.save(post);
  }

  async remove(id: number) {
    const post = await this.findById(id);
    await this.repo.remove(post);
    return { message: 'Post removed' };
  }

  private toSlug(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  private async generateUniqueSlug(title: string, excludeId?: number): Promise<string> {
    const base = this.toSlug(title);
    let slug = base;
    let counter = 1;
    while (true) {
      const existing = await this.repo.findOne({ where: { slug } });
      if (!existing || existing.id === excludeId) return slug;
      slug = `${base}-${counter++}`;
    }
  }
}
