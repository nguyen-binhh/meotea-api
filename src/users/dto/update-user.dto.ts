import { IsString, IsEnum, IsOptional, IsBoolean } from 'class-validator';
import { Role } from '../../common/enums/role.enum';
export class UpdateUserDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsString() phone?: string;
  @IsOptional() @IsEnum(Role) role?: Role;
  @IsOptional() @IsBoolean() isActive?: boolean;
}
