import { IsString, IsNumber, IsBoolean, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class SizeDto {
  @IsString() sizeCode: string;
  @IsString() name: string;
  @IsNumber() priceModifier: number;
  @IsOptional() @IsNumber() sortOrder?: number;
}

class ToppingDto {
  @IsString() name: string;
  @IsNumber() price: number;
  @IsOptional() @IsNumber() sortOrder?: number;
}

export class CreateProductDto {
  @IsString() name: string;
  @IsString() slug: string;
  @IsOptional() @IsNumber() categoryId?: number;
  @IsNumber() price: number;
  @IsOptional() @IsString() image?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsNumber() rating?: number;
  @IsOptional() @IsNumber() reviews?: number;
  @IsOptional() @IsBoolean() isBestseller?: boolean;
  @IsOptional() @IsBoolean() isNew?: boolean;
  @IsOptional() @IsArray() tags?: string[];
  @IsOptional() @IsArray() sweetnessLevels?: number[];
  @IsOptional() @IsArray() iceLevels?: string[];
  @IsOptional() @IsNumber() sortOrder?: number;
  @IsOptional() @IsArray() @ValidateNested({ each: true }) @Type(() => SizeDto) sizes?: SizeDto[];
  @IsOptional() @IsArray() @ValidateNested({ each: true }) @Type(() => ToppingDto) toppings?: ToppingDto[];
}
