import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

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
        html: this.verificationTemplate(name, url),
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
        html: this.resetPasswordTemplate(name, url),
      });
      this.logger.log(`Password reset email sent to ${to}`);
    } catch (err) {
      this.logger.error(`Failed to send password reset email to ${to}:`, err);
      this.logger.warn(`[DEV] Reset token: ${token}`);
    }
  }

  private verificationTemplate(name: string, url: string): string {
    return `<!DOCTYPE html>
<html lang="vi">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Xác nhận tài khoản</title></head>
<body style="margin:0;padding:0;background:#f8f0ff;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f0ff;padding:40px 16px;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(206,147,216,0.2);">
      <tr>
        <td style="background:linear-gradient(135deg,#CE93D8 0%,#F48FB1 100%);padding:36px;text-align:center;">
          <div style="font-size:40px;margin-bottom:8px;">🐱</div>
          <div style="color:#fff;font-size:24px;font-weight:900;letter-spacing:2px;">Mèo Trà</div>
          <div style="color:rgba(255,255,255,0.8);font-size:13px;margin-top:4px;">Một ngụm yêu thương</div>
        </td>
      </tr>
      <tr>
        <td style="padding:40px 40px 32px;">
          <p style="font-size:16px;color:#333;margin:0 0 12px;">Xin chào, <strong style="color:#CE93D8;">${name}</strong>! 👋</p>
          <p style="font-size:15px;color:#555;margin:0 0 28px;line-height:1.7;">Cảm ơn bạn đã đăng ký tài khoản tại <strong>Mèo Trà</strong>. Để hoàn tất đăng ký, vui lòng xác nhận địa chỉ email của bạn bằng cách nhấn vào nút bên dưới.</p>
          <div style="text-align:center;margin:32px 0;">
            <a href="${url}" style="display:inline-block;background:linear-gradient(135deg,#CE93D8,#F48FB1);color:#fff;text-decoration:none;padding:15px 40px;border-radius:32px;font-size:15px;font-weight:700;letter-spacing:0.5px;box-shadow:0 4px 16px rgba(244,143,177,0.4);">✅ Xác nhận email</a>
          </div>
          <p style="font-size:13px;color:#999;margin:24px 0 0;line-height:1.7;">Liên kết này sẽ <strong>hết hạn sau 24 giờ</strong>.<br>Nếu bạn không thực hiện đăng ký, vui lòng bỏ qua email này.</p>
          <hr style="border:none;border-top:1px solid #f0e0ff;margin:28px 0;">
          <p style="font-size:12px;color:#bbb;margin:0;line-height:1.6;">Hoặc dán đường link sau vào trình duyệt:<br><span style="color:#CE93D8;word-break:break-all;">${url}</span></p>
        </td>
      </tr>
      <tr>
        <td style="background:#fdf5ff;padding:20px 40px;text-align:center;border-top:1px solid #f0e0ff;">
          <p style="font-size:12px;color:#ccc;margin:0;">© 2024 Mèo Trà • Một ngụm yêu thương 🐱</p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
  }

  private resetPasswordTemplate(name: string, url: string): string {
    return `<!DOCTYPE html>
<html lang="vi">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Đặt lại mật khẩu</title></head>
<body style="margin:0;padding:0;background:#f8f0ff;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f0ff;padding:40px 16px;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(206,147,216,0.2);">
      <tr>
        <td style="background:linear-gradient(135deg,#F48FB1 0%,#CE93D8 100%);padding:36px;text-align:center;">
          <div style="font-size:40px;margin-bottom:8px;">🔑</div>
          <div style="color:#fff;font-size:24px;font-weight:900;letter-spacing:2px;">Mèo Trà</div>
          <div style="color:rgba(255,255,255,0.8);font-size:13px;margin-top:4px;">Đặt lại mật khẩu</div>
        </td>
      </tr>
      <tr>
        <td style="padding:40px 40px 32px;">
          <p style="font-size:16px;color:#333;margin:0 0 12px;">Xin chào, <strong style="color:#F48FB1;">${name}</strong>!</p>
          <p style="font-size:15px;color:#555;margin:0 0 28px;line-height:1.7;">Chúng tôi nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn. Nhấn vào nút bên dưới để tạo mật khẩu mới.</p>
          <div style="text-align:center;margin:32px 0;">
            <a href="${url}" style="display:inline-block;background:linear-gradient(135deg,#F48FB1,#CE93D8);color:#fff;text-decoration:none;padding:15px 40px;border-radius:32px;font-size:15px;font-weight:700;letter-spacing:0.5px;box-shadow:0 4px 16px rgba(244,143,177,0.4);">🔑 Đặt lại mật khẩu</a>
          </div>
          <p style="font-size:13px;color:#999;margin:24px 0 0;line-height:1.7;">Liên kết này sẽ <strong>hết hạn sau 1 giờ</strong>.<br>Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này. Tài khoản của bạn vẫn an toàn.</p>
          <hr style="border:none;border-top:1px solid #f0e0ff;margin:28px 0;">
          <p style="font-size:12px;color:#bbb;margin:0;line-height:1.6;">Hoặc dán đường link sau vào trình duyệt:<br><span style="color:#F48FB1;word-break:break-all;">${url}</span></p>
        </td>
      </tr>
      <tr>
        <td style="background:#fdf5ff;padding:20px 40px;text-align:center;border-top:1px solid #f0e0ff;">
          <p style="font-size:12px;color:#ccc;margin:0;">© 2024 Mèo Trà • Một ngụm yêu thương 🐱</p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
  }
}
