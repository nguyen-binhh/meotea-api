import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { PostCategoriesService } from './post-categories.service';
import { CreatePostCategoryDto } from './dto/create-post-category.dto';
import { UpdatePostCategoryDto } from './dto/update-post-category.dto';
import { Public } from '../common/decorators/public.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@ApiTags('post-categories')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('post-categories')
export class PostCategoriesController {
  constructor(private service: PostCategoriesService) {}

  @Public()
  @ApiQuery({ name: 'all', required: false, description: 'Admin: include inactive categories' })
  @Get()
  findAll(@Query('all') all?: string) {
    return this.service.findAll(all !== 'true');
  }

  @Public()
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.service.findBySlug(slug);
  }

  @ApiBearerAuth()
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  @Post()
  create(@Body() dto: CreatePostCategoryDto) {
    return this.service.create(dto);
  }

  @ApiBearerAuth()
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePostCategoryDto) {
    return this.service.update(id, dto);
  }

  @ApiBearerAuth()
  @Roles(Role.SUPER_ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
