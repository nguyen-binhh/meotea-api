import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private transporter: nodemailer.Transporter;

  constructor(private config: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.config.get('MAIL_HOST', 'smtp.gmail.com'),
      port: this.config.get<number>('MAIL_PORT', 587),
      secure: false,
      auth: {
        user: this.config.get('MAIL_USER'),
        pass: this.config.get('MAIL_PASS'),
      },
      tls: { rejectUnauthorized: false },
    });
  }

  private isSmtpConfigured(): boolean {
    const user = this.config.get('MAIL_USER', '');
    const pass = this.config.get('MAIL_PASS', '');
    return !!user && !user.includes('your_') && !!pass && !pass.includes('your_');
  }

  private renderTemplate(filename: string, vars: Record<string, string>): string {
    const filePath = path.join(__dirname, 'templates', filename);
    let html = fs.readFileSync(filePath, 'utf-8');
    for (const [key, value] of Object.entries(vars)) {
      html = html.replaceAll(`{{${key}}}`, value);
    }
    return html;
  }

  async sendVerificationEmail(to: string, name: string, token: string): Promise<void> {
    const frontendUrl = this.config.get('FRONTEND_URL', 'http://localhost:3000');
    const url = `${frontendUrl}/xac-nhan-email?token=${token}`;

    if (!this.isSmtpConfigured()) {
      this.logger.warn(`[DEV] SMTP not configured. Verification token for ${to}: ${token}`);
      this.logger.warn(`[DEV] Verification URL: ${url}`);
      return;
    }

    try {
      await this.transporter.sendMail({
        from: `"Mèo Trà 🐱" <${this.config.get('MAIL_FROM', 'noreply@meotea.vn')}>`,
        to,
        subject: '🐱 Xác nhận tài khoản Mèo Trà',
        html: this.renderTemplate('verify-email.html', { name, url }),
      });
      this.logger.log(`Verification email sent to ${to}`);
    } catch (err) {
      this.logger.error(`Failed to send verification email to ${to}:`, err);
      this.logger.warn(`[DEV] Verification token: ${token}`);
    }
  }

  async sendPasswordResetEmail(to: string, name: string, token: string): Promise<void> {
    const frontendUrl = this.config.get('FRONTEND_URL', 'http://localhost:3000');
    const url = `${frontendUrl}/dat-lai-mat-khau?token=${token}`;

    if (!this.isSmtpConfigured()) {
      this.logger.warn(`[DEV] SMTP not configured. Reset token for ${to}: ${token}`);
      this.logger.warn(`[DEV] Reset URL: ${url}`);
      return;
    }

    try {
      await this.transporter.sendMail({
        from: `"Mèo Trà 🐱" <${this.config.get('MAIL_FROM', 'noreply@meotea.vn')}>`,
        to,
        subject: '🔑 Đặt lại mật khẩu Mèo Trà',
        html: this.renderTemplate('reset-password.html', { name, url }),
      });
      this.logger.log(`Password reset email sent to ${to}`);
    } catch (err) {
      this.logger.error(`Failed to send password reset email to ${to}:`, err);
      this.logger.warn(`[DEV] Reset token: ${token}`);
    }
  }
}
