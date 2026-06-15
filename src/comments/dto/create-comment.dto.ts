import { IsString, IsOptional, IsEmail, IsInt, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateCommentDto {
  @ApiProperty({ required: false, description: 'Required for guest users, ignored for authenticated users' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  authorName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  authorEmail?: string;

  @ApiProperty({ description: 'Comment content', minLength: 2, maxLength: 2000 })
  @IsString()
  @MinLength(2)
  @MaxLength(2000)
  content: string;

  @ApiProperty({ required: false, description: 'Parent comment ID for replies' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  parentId?: number;
}
