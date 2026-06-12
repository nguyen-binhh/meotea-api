import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { Cart } from './cart.entity';

@Entity('cart_items')
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cartId: number;

  @ManyToOne(() => Cart, cart => cart.items, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cartId' })
  cart: Cart;

  @Column()
  productId: number;

  @Column({ length: 10 })
  sizeCode: string;

  @Column()
  sweetness: number;

  @Column({ length: 50 })
  ice: string;

  @Column({ type: 'json', nullable: true })
  toppingIds: number[];

  @Column()
  quantity: number;

  @Column({ type: 'text', nullable: true })
  note: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  unitPrice: number;
}
