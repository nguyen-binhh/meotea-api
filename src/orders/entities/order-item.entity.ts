import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity('order_items')
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  orderId: string;

  @ManyToOne(() => Order, (o) => o.items, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @Column()
  productId: number;

  @Column()
  productName: string;

  @Column()
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  unitPrice: number;

  @Column({ length: 10 })
  selectedSizeCode: string;

  @Column()
  selectedSizeName: string;

  @Column()
  selectedSweetness: number;

  @Column()
  selectedIce: string;

  @Column({ type: 'json', nullable: true })
  selectedToppings: any[];

  @Column({ type: 'text', nullable: true })
  note: string;
}
