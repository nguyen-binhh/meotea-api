import { IsString, IsOptional, IsNumber } from 'class-validator';
export class CreateCategoryDto {
  @IsString() name: string;
  @IsString() slug: string;
  @IsOptional() @IsString() icon?: string;
  @IsOptional() @IsString() color?: string;
  @IsOptional() @IsNumber() sortOrder?: number;
}
