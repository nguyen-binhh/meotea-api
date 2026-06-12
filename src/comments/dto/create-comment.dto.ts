import { IsString, IsOptional, IsEmail, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
}
