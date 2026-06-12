import { IsEmail, IsString, IsEnum, IsOptional } from 'class-validator';
import { Role } from '../../common/enums/role.enum';
export class CreateUserDto {
  @IsEmail() email: string;
  @IsString() password: string;
  @IsString() name: string;
  @IsOptional() @IsString() phone?: string;
  @IsOptional() @IsEnum(Role) role?: Role;
}
