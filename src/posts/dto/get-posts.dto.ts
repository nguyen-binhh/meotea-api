import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PaginationDto } from '../../common/dto/pagination.dto';

export class GetPostsDto extends PaginationDto {
  @ApiProperty({ required: false, description: 'Filter by post category slug' })
  @IsOptional()
  @IsString()
  categorySlug?: string;

  @ApiProperty({ required: false, description: 'Admin: include inactive posts' })
  @IsOptional()
  @IsString()
  all?: string;
}
