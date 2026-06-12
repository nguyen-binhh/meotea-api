import { Controller, Get, Post, Body, Param, Query, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiQuery, ApiOperation } from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
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
  @ApiOperation({ summary: 'Get comments for a post' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @Get(':postId/comments')
  findAll(
    @Param('postId', ParseIntPipe) postId: number,
    @Query() pagination: PaginationDto,
  ) {
    const page  = Number(pagination.page)  || 1;
    const limit = Number(pagination.limit) || 10;
    return this.service.findAllByPost(postId, page, limit);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add a comment to a post (auth optional — guests must provide authorName)' })
  @Post(':postId/comments')
  create(
    @Param('postId', ParseIntPipe) postId: number,
    @Body() dto: CreateCommentDto,
    @CurrentUser() currentUser: any,
  ) {
    return this.service.create(postId, dto, currentUser ?? undefined);
  }
}
