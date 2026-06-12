import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Public } from '../common/decorators/public.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@ApiTags('products')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('products')
export class ProductsController {
  constructor(private service: ProductsService) {}

  @Public()
  @ApiQuery({ name: 'categorySlug', required: false })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'featured', required: false })
  @Get()
  findAll(
    @Query('categorySlug') categorySlug?: string,
    @Query('search') search?: string,
    @Query('featured') featured?: string,
  ) {
    return this.service.findAll({ categorySlug, search, featured: featured === 'true' });
  }

  @Public()
  @Get(':slug')
  findOne(@Param('slug') slug: string) { return this.service.findBySlug(slug); }

  @ApiBearerAuth()
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  @Post()
  create(@Body() dto: CreateProductDto) { return this.service.create(dto); }

  @ApiBearerAuth()
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProductDto) {
    return this.service.update(id, dto);
  }

  @ApiBearerAuth()
  @Roles(Role.SUPER_ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) { return this.service.remove(id); }
}
