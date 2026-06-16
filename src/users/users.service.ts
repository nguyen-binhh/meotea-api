import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Role } from '../common/enums/role.enum';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(dto: CreateUserDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find({ select: ['id', 'email', 'name', 'phone', 'role', 'isActive', 'createdAt'] });
  }

  async findById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  async update(id: number, dto: UpdateUserDto, requestingUser: any) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    // Only super_admin can assign admin/super_admin roles
    if (dto.role && dto.role !== Role.USER && requestingUser.role !== Role.SUPER_ADMIN) {
      throw new ForbiddenException('Only super admin can assign elevated roles');
    }
    Object.assign(user, dto);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    await this.repo.remove(user);
    return { message: 'User removed' };
  }

  async getProfile(id: number) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    const { password, ...result } = user;
    return result;
  }

  async updateProfile(id: number, dto: UpdateProfileDto, mediaUrl?: string) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    if (dto.name !== undefined) user.name = dto.name;
    if (dto.phone !== undefined) user.phone = dto.phone;
    if (mediaUrl !== undefined) user.media = mediaUrl;
    const saved = await this.repo.save(user);
    const { password, ...result } = saved;
    return result;
  }

  async findByVerificationToken(token: string) {
    return this.repo.findOne({ where: { emailVerificationToken: token } });
  }

  async findByPasswordResetToken(token: string) {
    return this.repo.findOne({ where: { passwordResetToken: token } });
  }

  async setEmailVerificationToken(userId: number, token: string, expires: Date) {
    await this.repo.update(userId, { emailVerificationToken: token, emailVerificationExpires: expires });
  }

  async markEmailVerified(userId: number) {
    await this.repo.update(userId, {
      emailVerified: true,
      emailVerificationToken: null,
      emailVerificationExpires: null,
    });
  }

  async setPasswordResetToken(userId: number, token: string, expires: Date) {
    await this.repo.update(userId, { passwordResetToken: token, passwordResetExpires: expires });
  }

  async updatePassword(userId: number, hashedPassword: string) {
    await this.repo.update(userId, {
      password: hashedPassword,
      passwordResetToken: null,
      passwordResetExpires: null,
    });
  }
}
