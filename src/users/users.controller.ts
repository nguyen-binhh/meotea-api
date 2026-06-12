import { Controller, Get, Patch, Delete, Param, Body, UseGuards, ParseIntPipe, Post, UploadedFile, UseInterceptors, Req, BadRequestException } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Role } from '../common/enums/role.enum';
import { Request } from 'express';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('me')
  getProfile(@CurrentUser() user: any) {
    return this.usersService.getProfile(user.id);
  }

  @Patch('me')
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({
        destination: './uploads/avatars',
        filename: (req, file, cb) => {
          const ext = extname(file.originalname);
          cb(null, Date.now() + '-' + Math.random().toString(36).slice(2) + ext);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/image\/(jpg|jpeg|png|gif|webp)/)) {
          cb(new BadRequestException('Only image files allowed'), false);
        } else {
          cb(null, true);
        }
      },
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  updateProfile(
    @CurrentUser() user: any,
    @Body() dto: UpdateProfileDto,
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
  ) {
    const mediaUrl = file
      ? `${req.protocol}://${req.get('host')}/uploads/avatars/${file.filename}`
      : undefined;
    return this.usersService.updateProfile(user.id, dto, mediaUrl);
  }

  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  @Get()
  findAll() { return this.usersService.findAll(); }

  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserDto,
    @CurrentUser() user: any,
  ) { return this.usersService.update(id, dto, user); }

  @Roles(Role.SUPER_ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
