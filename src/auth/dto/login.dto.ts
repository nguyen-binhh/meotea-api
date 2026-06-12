import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'nguyenphubinh2207@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'thienthan' })
  @IsString()
  @MinLength(6)
  password: string;
}
