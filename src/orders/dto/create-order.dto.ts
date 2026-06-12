import { IsString, IsEnum, IsNumber, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PaymentMethod } from '../../common/enums/payment-method.enum';

class OrderItemDto {
  @IsNumber() productId: number;
  @IsString() productName: string;
  @IsNumber() quantity: number;
  @IsNumber() unitPrice: number;
  @IsString() selectedSizeCode: string;
  @IsString() selectedSizeName: string;
  @IsNumber() selectedSweetness: number;
  @IsString() selectedIce: string;
  @IsOptional() @IsArray() selectedToppings?: any[];
  @IsOptional() @IsString() note?: string;
}

export class CreateOrderDto {
  @IsString() customerName: string;
  @IsString() customerPhone: string;
  @IsString() customerAddress: string;
  @IsOptional() @IsString() customerNote?: string;
  @IsEnum(PaymentMethod) paymentMethod: PaymentMethod;
  @IsNumber() subtotal: number;
  @IsOptional() @IsNumber() discount?: number;
  @IsNumber() total: number;
  @IsOptional() @IsNumber() userId?: number;
  @IsArray() @ValidateNested({ each: true }) @Type(() => OrderItemDto) items: OrderItemDto[];
}
