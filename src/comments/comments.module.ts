import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { PostCommentsController } from './post-comments.controller';
import { Comment } from './entities/comment.entity';
import { CommentReaction } from './entities/comment-reaction.entity';
import { PostReaction } from './entities/post-reaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, CommentReaction, PostReaction])],
  controllers: [PostCommentsController, CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
