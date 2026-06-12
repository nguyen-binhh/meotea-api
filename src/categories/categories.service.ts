import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private repo: Repository<Category>) {}

  findAll() {
    return this.repo.find({ where: { isActive: true }, order: { sortOrder: 'ASC', id: 'ASC' } });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  findBySlug(slug: string) {
    return this.repo.findOne({ where: { slug } });
  }

  create(dto: CreateCategoryDto) {
    return this.repo.save(this.repo.create(dto));
  }

  async update(id: number, dto: UpdateCategoryDto) {
    const cat = await this.repo.findOne({ where: { id } });
    if (!cat) throw new NotFoundException('Category not found');
    Object.assign(cat, dto);
    return this.repo.save(cat);
  }

  async remove(id: number) {
    const cat = await this.repo.findOne({ where: { id } });
    if (!cat) throw new NotFoundException('Category not found');
    await this.repo.remove(cat);
    return { message: 'Category removed' };
  }
}
