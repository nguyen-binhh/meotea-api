import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { PostCategory } from '../../post-categories/entities/post-category.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  subtitle: string;

  @Column({ type: 'longtext' })
  content: string;

  @Column({ nullable: true })
  image: string;

  @Column({ unique: true })
  slug: string;

  @Column({ nullable: true })
  categoryId: number;

  @ManyToOne(() => PostCategory, (cat) => cat.posts, { nullable: true, onDelete: 'SET NULL', eager: false })
  @JoinColumn({ name: 'categoryId' })
  category: PostCategory;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
