import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, Index } from 'typeorm';
import { Comment } from './comment.entity';

@Entity('comment_reactions')
export class CommentReaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  commentId: number;

  @ManyToOne(() => Comment, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'commentId' })
  comment: Comment;

  @Column({ nullable: true })
  userId: number;

  @Column({ nullable: true, length: 64 })
  guestKey: string;

  @Column({ length: 10 })
  emoji: string;

  @CreateDateColumn()
  createdAt: Date;
}
