import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Product } from '../products/entities/product.entity';
import { ProductSize } from '../products/entities/product-size.entity';
import { ProductTopping } from '../products/entities/product-topping.entity';
import { MailModule } from '../mail/mail.module';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderItem, Product, ProductSize, ProductTopping, User]), MailModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
