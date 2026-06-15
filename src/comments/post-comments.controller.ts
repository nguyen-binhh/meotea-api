import { Controller, Get, Post, Body, Param, Query, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateReactionDto } from './dto/create-reaction.dto';
import { Public } from '../common/decorators/public.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { PaginationDto } from '../common/dto/pagination.dto';

@ApiTags('posts')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('posts')
export class PostCommentsController {
  constructor(private service: CommentsService) {}

  @Public()
  @ApiOperation({ summary: 'Get top-level comments for a post' })
  @Get(':postId/comments')
  findAll(
    @Param('postId', ParseIntPipe) postId: number,
    @Query() pagination: PaginationDto,
  ) {
    const page  = Number(pagination.page)  || 1;
    const limit = Number(pagination.limit) || 10;
    return this.service.findAllByPost(postId, page, limit);
  }

  @Public()
  @ApiOperation({ summary: 'Add a comment or reply to a post' })
  @Post(':postId/comments')
  create(
    @Param('postId', ParseIntPipe) postId: number,
    @Body() dto: CreateCommentDto,
    @CurrentUser() currentUser: any,
  ) {
    return this.service.create(postId, dto, currentUser ?? undefined);
  }

  @Public()
  @ApiOperation({ summary: 'Get reaction counts for a post' })
  @Get(':postId/reactions')
  getPostReactions(@Param('postId', ParseIntPipe) postId: number) {
    return this.service.getPostReactionCounts(postId);
  }

  @Public()
  @ApiOperation({ summary: 'Toggle emoji reaction on a post' })
  @Post(':postId/react')
  togglePostReaction(
    @Param('postId', ParseIntPipe) postId: number,
    @Body() dto: CreateReactionDto,
    @CurrentUser() currentUser: any,
  ) {
    return this.service.togglePostReaction(postId, dto, currentUser ?? undefined);
  }
}
