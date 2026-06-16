import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { UsersService } from '../users/users.service';
import { MailService } from '../mail/mail.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) throw new ConflictException('Email already in use');

    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await this.usersService.create({ ...dto, password: hashed });

    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    await this.usersService.setEmailVerificationToken(user.id, token, expires);
    await this.mailService.sendVerificationEmail(user.email, user.name, token);

    return { message: 'Verification email sent. Please check your inbox.' };
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const valid = await bcrypt.compare(dto.password, user.password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');
    if (!user.isActive) throw new UnauthorizedException('Account is deactivated');
    // Only block login if user has a pending verification token (registered after email-verify feature)
    // Legacy users (emailVerificationToken = null) are treated as verified
    if (!user.emailVerified && user.emailVerificationToken !== null) {
      throw new UnauthorizedException('Email not verified. Please check your inbox.');
    }
    const { password, ...result } = user as any;
    return { user: result, access_token: this.signToken(user) };
  }

  async verifyEmail(token: string) {
    const user = await this.usersService.findByVerificationToken(token);
    if (!user) throw new BadRequestException('Invalid verification token');
    if (!user.emailVerificationExpires || user.emailVerificationExpires < new Date()) {
      throw new BadRequestException('Verification token has expired. Please request a new one.');
    }
    await this.usersService.markEmailVerified(user.id);
    const refreshed = await this.usersService.findById(user.id);
    const { password, ...result } = refreshed as any;
    return { user: result, access_token: this.signToken(refreshed!) };
  }

  async resendVerification(email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) return { message: 'If the email exists, a verification link has been sent.' };
    if (user.emailVerified) throw new BadRequestException('Email is already verified');

    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    await this.usersService.setEmailVerificationToken(user.id, token, expires);
    await this.mailService.sendVerificationEmail(user.email, user.name, token);

    return { message: 'Verification email resent' };
  }

  async forgotPassword(email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) return { message: 'If the email exists, a reset link has been sent.' };

    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 60 * 60 * 1000);
    await this.usersService.setPasswordResetToken(user.id, token, expires);
    await this.mailService.sendPasswordResetEmail(user.email, user.name, token);

    return { message: 'Password reset email sent' };
  }

  async resetPassword(token: string, newPassword: string) {
    const user = await this.usersService.findByPasswordResetToken(token);
    if (!user) throw new BadRequestException('Invalid reset token');
    if (!user.passwordResetExpires || user.passwordResetExpires < new Date()) {
      throw new BadRequestException('Reset token has expired. Please request a new one.');
    }
    const hashed = await bcrypt.hash(newPassword, 10);
    await this.usersService.updatePassword(user.id, hashed);
    const refreshed = await this.usersService.findById(user.id);
    const { password, ...result } = refreshed as any;
    return { user: result, access_token: this.signToken(refreshed!) };
  }

  private signToken(user: any) {
    return this.jwtService.sign({ sub: user.id, email: user.email, role: user.role });
  }
}
