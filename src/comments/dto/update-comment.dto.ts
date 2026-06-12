import { IsString, IsOptional, IsBoolean, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCommentDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(2000)
  content?: string;

  @ApiProperty({ required: false, description: 'Admin: activate or deactivate comment' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
