import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderStatus } from '../common/enums/order-status.enum';
import { Product } from '../products/entities/product.entity';
import { ProductSize } from '../products/entities/product-size.entity';
import { ProductTopping } from '../products/entities/product-topping.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private repo: Repository<Order>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
    @InjectRepository(ProductSize) private sizeRepo: Repository<ProductSize>,
    @InjectRepository(ProductTopping) private toppingRepo: Repository<ProductTopping>,
  ) {}

  async create(dto: CreateOrderDto, userId: number | null) {
    const orderId = `MT-${Date.now()}`;

    let subtotal = 0;
    const resolvedItems = await Promise.all(
      dto.items.map(async (item) => {
        const product = await this.productRepo.findOne({
          where: { id: item.productId, isActive: true },
        });
        if (!product) throw new NotFoundException(`Product #${item.productId} not found`);

        const size = await this.sizeRepo.findOne({
          where: { productId: item.productId, sizeCode: item.selectedSizeCode },
        });
        if (!size) throw new BadRequestException(`Size "${item.selectedSizeCode}" not found for product #${item.productId}`);

        const toppingIds = item.toppingIds ?? [];
        const toppings = toppingIds.length > 0
          ? await this.toppingRepo.findBy({ id: In(toppingIds), productId: item.productId })
          : [];

        const unitPrice =
          Number(product.price) +
          Number(size.priceModifier) +
          toppings.reduce((sum, t) => sum + Number(t.price), 0);

        subtotal += unitPrice * item.quantity;

        return {
          productId: item.productId,
          productName: product.name,
          quantity: item.quantity,
          unitPrice,
          selectedSizeCode: size.sizeCode,
          selectedSizeName: size.name,
          selectedSweetness: item.selectedSweetness,
          selectedIce: item.selectedIce,
          selectedToppings: toppings.map(t => ({ id: t.id, name: t.name, price: Number(t.price) })),
          note: item.note ?? null,
        };
      }),
    );

    const order = this.repo.create({
      ...dto,
      id: orderId,
      status: OrderStatus.PENDING,
      subtotal,
      discount: 0,
      total: subtotal,
      userId: userId ?? undefined,
      items: resolvedItems as any,
    });
    return this.repo.save(order);
  }

  findAll() {
    return this.repo.find({ order: { createdAt: 'DESC' } });
  }

  findMyOrders(userId: number) {
    return this.repo.find({ where: { userId }, order: { createdAt: 'DESC' } });
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
