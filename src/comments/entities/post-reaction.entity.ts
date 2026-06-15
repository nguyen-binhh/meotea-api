import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, Index } from 'typeorm';
import { Post } from '../../posts/entities/post.entity';

@Entity('post_reactions')
export class PostReaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  postId: number;

  @ManyToOne(() => Post, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'postId' })
  post: Post;

  @Column({ nullable: true })
  userId: number;

  @Column({ nullable: true, length: 64 })
  guestKey: string;

  @Column({ length: 10 })
  emoji: string;

  @CreateDateColumn()
  createdAt: Date;
}
