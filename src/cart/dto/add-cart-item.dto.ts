import { IsArray, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class AddCartItemDto {
  @IsNumber()
  productId: number;

  @IsString()
  sizeCode: string;

  @IsNumber()
  sweetness: number;

  @IsString()
  ice: string;

  @IsArray()
  @IsNumber({}, { each: true })
  toppingIds: number[];

  @IsNumber()
  @Min(1)
  quantity: number;

  @IsOptional()
  @IsString()
  note?: string;
}
