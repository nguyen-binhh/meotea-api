import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CreateReactionDto } from './dto/create-reaction.dto';
import { Public } from '../common/decorators/public.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@ApiTags('comments')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('comments')
export class CommentsController {
  constructor(private service: CommentsService) {}

  @Public()
  @ApiOperation({ summary: 'Get replies for a comment' })
  @Get(':id/replies')
  getReplies(@Param('id', ParseIntPipe) id: number) {
    return this.service.findReplies(id);
  }

  @Public()
  @ApiOperation({ summary: 'Toggle emoji reaction on a comment' })
  @Post(':id/react')
  toggleReaction(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateReactionDto,
    @CurrentUser() currentUser: any,
  ) {
    return this.service.toggleCommentReaction(id, dto, currentUser ?? undefined);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a comment (owner: edit content | admin: also toggle isActive)' })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCommentDto,
    @CurrentUser() currentUser: any,
  ) {
    return this.service.update(id, dto, currentUser);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a comment (owner or admin)' })
  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser() currentUser: any,
  ) {
    return this.service.remove(id, currentUser);
  }
}
