import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductSize } from './entities/product-size.entity';
import { ProductTopping } from './entities/product-topping.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { buildPaginationMeta } from '../common/dto/pagination.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
    @InjectRepository(ProductSize) private sizeRepo: Repository<ProductSize>,
    @InjectRepository(ProductTopping) private toppingRepo: Repository<ProductTopping>,
  ) {}

  async findAll(filters?: {
    categorySlug?: string;
    search?: string;
    featured?: boolean;
    page?: number;
    limit?: number;
  }) {
    const page  = filters?.page  ?? 1;
    const limit = filters?.limit ?? 10;
    const skip  = (page - 1) * limit;

    const query = this.productRepo
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .leftJoinAndSelect('product.sizes', 'sizes')
      .leftJoinAndSelect('product.toppings', 'toppings')
      .where('product.isActive = :isActive', { isActive: true });

    if (filters?.categorySlug) {
      query.andWhere('category.slug = :slug', { slug: filters.categorySlug });
    }
    if (filters?.search) {
      query.andWhere('product.name LIKE :search', { search: `%${filters.search}%` });
    }
    if (filters?.featured) {
      query.andWhere('(product.isBestseller = true OR product.isNew = true)');
    }

    const [items, total] = await query
      .orderBy('product.sortOrder', 'ASC')
      .addOrderBy('product.id', 'ASC')
      .skip(skip)
      .take(limit)
      .getManyAndCount();

    return { items, meta: buildPaginationMeta(page, limit, total) };
  }

  async findBySlug(slug: string) {
    const product = await this.productRepo
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .leftJoinAndSelect('product.sizes', 'sizes')
      .leftJoinAndSelect('product.toppings', 'toppings')
      .where('product.slug = :slug AND product.isActive = true', { slug })
      .getOne();
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async create(dto: CreateProductDto) {
    const { sizes, toppings, ...productData } = dto;
    const product: Product = this.productRepo.create(productData as Partial<Product>);
    if (sizes) product.sizes = sizes.map(s => this.sizeRepo.create(s));
    if (toppings) product.toppings = toppings.map(t => this.toppingRepo.create(t));
    return this.productRepo.save(product);
  }

  async update(id: number, dto: UpdateProductDto) {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');
    Object.assign(product, dto);
    return this.productRepo.save(product);
  }

  async remove(id: number) {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');
    await this.productRepo.remove(product);
    return { message: 'Product removed' };
  }
}
