import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderStatus } from '../common/enums/order-status.enum';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private repo: Repository<Order>) {}

  async create(dto: CreateOrderDto) {
    const orderId = `MT-${Date.now()}`;
    const order = this.repo.create({
      ...dto,
      id: orderId,
      status: OrderStatus.PENDING,
      discount: dto.discount ?? 0,
    });
    return this.repo.save(order);
  }

  findAll() {
    return this.repo.find({ order: { createdAt: 'DESC' } });
  }

  async findOne(id: string) {
    const order = await this.repo.findOne({ where: { id } });
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  async updateStatus(id: string, status: OrderStatus) {
    const order = await this.repo.findOne({ where: { id } });
    if (!order) throw new NotFoundException('Order not found');
    order.status = status;
    return this.repo.save(order);
  }
}
