import { IsString, IsNumber, IsBoolean, IsOptional, IsArray } from 'class-validator';
export class UpdateProductDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsString() slug?: string;
  @IsOptional() @IsNumber() categoryId?: number;
  @IsOptional() @IsNumber() price?: number;
  @IsOptional() @IsString() image?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsNumber() rating?: number;
  @IsOptional() @IsNumber() reviews?: number;
  @IsOptional() @IsBoolean() isBestseller?: boolean;
  @IsOptional() @IsBoolean() isNew?: boolean;
  @IsOptional() @IsArray() tags?: string[];
  @IsOptional() @IsArray() sweetnessLevels?: number[];
  @IsOptional() @IsArray() iceLevels?: string[];
  @IsOptional() @IsBoolean() isActive?: boolean;
  @IsOptional() @IsNumber() sortOrder?: number;
}
