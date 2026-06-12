import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostCategory } from './entities/post-category.entity';
import { CreatePostCategoryDto } from './dto/create-post-category.dto';
import { UpdatePostCategoryDto } from './dto/update-post-category.dto';

@Injectable()
export class PostCategoriesService {
  constructor(@InjectRepository(PostCategory) private repo: Repository<PostCategory>) {}

  findAll(onlyActive = true) {
    return this.repo.find({
      where: onlyActive ? { isActive: true } : {},
      order: { sortOrder: 'ASC', id: 'ASC' },
    });
  }

  async findBySlug(slug: string) {
    const cat = await this.repo.findOne({ where: { slug } });
    if (!cat) throw new NotFoundException('Post category not found');
    return cat;
  }

  async findById(id: number) {
    const cat = await this.repo.findOne({ where: { id } });
    if (!cat) throw new NotFoundException('Post category not found');
    return cat;
  }

  async create(dto: CreatePostCategoryDto) {
    const slug = this.toSlug(dto.name);
    const exists = await this.repo.findOne({ where: { slug } });
    if (exists) throw new ConflictException(`Slug "${slug}" already in use`);
    const cat = this.repo.create({ ...dto, slug });
    return this.repo.save(cat);
  }

  async update(id: number, dto: UpdatePostCategoryDto) {
    const cat = await this.findById(id);
    if (dto.name && dto.name !== cat.name) {
      const newSlug = this.toSlug(dto.name);
      const conflict = await this.repo.findOne({ where: { slug: newSlug } });
      if (conflict && conflict.id !== id) throw new ConflictException(`Slug "${newSlug}" already in use`);
      cat.slug = newSlug;
    }
    Object.assign(cat, dto);
    return this.repo.save(cat);
  }

  async remove(id: number) {
    const cat = await this.findById(id);
    await this.repo.remove(cat);
    return { message: 'Post category removed' };
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
}
