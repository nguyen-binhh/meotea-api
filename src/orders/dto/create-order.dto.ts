import { IsString, IsEnum, IsNumber, IsOptional, IsArray, ValidateNested, Min, IsEmail } from 'class-validator';
import { Type } from 'class-transformer';
import { PaymentMethod } from '../../common/enums/payment-method.enum';

export class CreateOrderItemDto {
  @IsNumber() productId: number;
  @IsNumber() @Min(1) quantity: number;
  @IsString() selectedSizeCode: string;
  @IsNumber() selectedSweetness: number;
  @IsString() selectedIce: string;
  @IsOptional() @IsArray() @IsNumber({}, { each: true }) toppingIds?: number[];
  @IsOptional() @IsString() note?: string;
}

export class CreateOrderDto {
  @IsString() customerName: string;
  @IsString() customerPhone: string;
  @IsString() customerAddress: string;
  @IsOptional() @IsString() customerNote?: string;
  @IsOptional() @IsEmail() customerEmail?: string;
  @IsEnum(PaymentMethod) paymentMethod: PaymentMethod;
  @IsArray() @ValidateNested({ each: true }) @Type(() => CreateOrderItemDto) items: CreateOrderItemDto[];
}
