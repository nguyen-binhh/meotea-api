import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { ProductSize } from './entities/product-size.entity';
import { ProductTopping } from './entities/product-topping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductSize, ProductTopping])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
