import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany,
  CreateDateColumn, UpdateDateColumn, JoinColumn
} from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { ProductSize } from './product-size.entity';
import { ProductTopping } from './product-topping.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column({ nullable: true })
  categoryId: number;

  @ManyToOne(() => Category, (cat) => cat.products, { eager: false, onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ nullable: true })
  image: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 3, scale: 2, default: 0 })
  rating: number;

  @Column({ default: 0 })
  reviews: number;

  @Column({ default: false })
  isBestseller: boolean;

  @Column({ default: false })
  isNew: boolean;

  @Column({ type: 'json', nullable: true })
  tags: string[];

  @Column({ type: 'json', nullable: true })
  sweetnessLevels: number[];

  @Column({ type: 'json', nullable: true })
  iceLevels: string[];

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 0 })
  sortOrder: number;

  @OneToMany(() => ProductSize, (s) => s.product, { cascade: true, eager: true })
  sizes: ProductSize[];

  @OneToMany(() => ProductTopping, (t) => t.product, { cascade: true, eager: true })
  toppings: ProductTopping[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
