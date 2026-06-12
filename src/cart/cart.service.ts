import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';
import { Product } from '../products/entities/product.entity';
import { AddCartItemDto } from './dto/add-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepo: Repository<Cart>,
    @InjectRepository(CartItem)
    private cartItemRepo: Repository<CartItem>,
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  async getCart(userId: number) {
    const cart = await this.getOrCreateCart(userId);
    const items = await Promise.all(cart.items.map(i => this.buildItemResponse(i)));
    return { id: cart.id, items: items.filter(Boolean) };
  }

  async addItem(userId: number, dto: AddCartItemDto) {
    const cart = await this.getOrCreateCart(userId);

    const product = await this.productRepo.findOne({
      where: { id: dto.productId },
      relations: ['sizes', 'toppings'],
    });
    if (!product) throw new NotFoundException('Product not found');

    const size = product.sizes.find(s => s.sizeCode === dto.sizeCode);
    if (!size) throw new NotFoundException('Size not found');

    const toppingIds = (dto.toppingIds ?? []).sort((a, b) => a - b);
    const toppings = product.toppings.filter(t => toppingIds.includes(t.id));
    const unitPrice =
      Number(product.price) +
      Number(size.priceModifier) +
      toppings.reduce((sum, t) => sum + Number(t.price), 0);

    const toppingKey = JSON.stringify(toppingIds);
    const existing = cart.items.find(
      i =>
        i.productId === dto.productId &&
        i.sizeCode === dto.sizeCode &&
        i.sweetness === dto.sweetness &&
        i.ice === dto.ice &&
        JSON.stringify([...(i.toppingIds ?? [])].sort((a, b) => a - b)) === toppingKey,
    );

    if (existing) {
      existing.quantity += dto.quantity;
      await this.cartItemRepo.save(existing);
      return this.buildItemResponse(existing);
    }

    const newItem = this.cartItemRepo.create({
      cartId: cart.id,
      productId: dto.productId,
      sizeCode: dto.sizeCode,
      sweetness: dto.sweetness,
      ice: dto.ice,
      toppingIds,
      quantity: dto.quantity,
      note: dto.note,
      unitPrice,
    });
    await this.cartItemRepo.save(newItem);
    return this.buildItemResponse(newItem);
  }

  async updateItem(userId: number, itemId: number, dto: UpdateCartItemDto) {
    const item = await this.getOwnedCartItem(userId, itemId);
    if (dto.quantity <= 0) {
      await this.cartItemRepo.remove(item);
      return null;
    }
    item.quantity = dto.quantity;
    await this.cartItemRepo.save(item);
    return this.buildItemResponse(item);
  }

  async removeItem(userId: number, itemId: number) {
    const item = await this.getOwnedCartItem(userId, itemId);
    await this.cartItemRepo.remove(item);
  }

  async clearCart(userId: number) {
    const cart = await this.cartRepo.findOne({ where: { userId } });
    if (cart) {
      await this.cartItemRepo.delete({ cartId: cart.id });
    }
  }

  private async getOrCreateCart(userId: number): Promise<Cart> {
    let cart = await this.cartRepo.findOne({ where: { userId } });
    if (!cart) {
      cart = this.cartRepo.create({ userId, items: [] });
      await this.cartRepo.save(cart);
    }
    return cart;
  }

  private async getOwnedCartItem(userId: number, itemId: number): Promise<CartItem> {
    const cart = await this.cartRepo.findOne({ where: { userId } });
    if (!cart) throw new NotFoundException('Cart not found');
    const item = await this.cartItemRepo.findOne({ where: { id: itemId, cartId: cart.id } });
    if (!item) throw new NotFoundException('Cart item not found');
    return item;
  }

  private async buildItemResponse(item: CartItem) {
    const product = await this.productRepo.findOne({
      where: { id: item.productId },
      relations: ['sizes', 'toppings', 'category'],
    });
    if (!product) return null;

    const size = product.sizes.find(s => s.sizeCode === item.sizeCode);
    const toppingIds = item.toppingIds ?? [];
    const toppings = product.toppings.filter(t => toppingIds.includes(t.id));

    return {
      id: item.id,
      quantity: item.quantity,
      unitPrice: Number(item.unitPrice),
      note: item.note ?? '',
      selectedSweetness: item.sweetness,
      selectedIce: item.ice,
      product: {
        id: product.id,
        name: product.name,
        slug: product.slug,
        categorySlug: product.category?.slug ?? '',
        price: Number(product.price),
        image: product.image ?? '',
        description: product.description ?? '',
        rating: Number(product.rating),
        reviews: product.reviews ?? 0,
        isBestseller: product.isBestseller,
        isNew: product.isNew,
        tags: product.tags ?? [],
        sweetnessLevels: product.sweetnessLevels ?? [],
        iceLevels: product.iceLevels ?? [],
        sizes: product.sizes.map(s => ({
          id: s.sizeCode,
          name: s.name,
          priceModifier: Number(s.priceModifier),
        })),
        toppings: product.toppings.map(t => ({
          id: t.id,
          name: t.name,
          price: Number(t.price),
        })),
      },
      selectedSize: size
        ? { id: size.sizeCode, name: size.name, priceModifier: Number(size.priceModifier) }
        : null,
      selectedToppings: toppings.map(t => ({ id: t.id, name: t.name, price: Number(t.price) })),
    };
  }
}
