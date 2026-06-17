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

  async sendOrderConfirmationEmail(to: string, order: {
    id: string;
    customerName: string;
    customerAddress: string;
    customerNote?: string;
    paymentMethod: string;
    subtotal: number;
    total: number;
    createdAt: Date;
    items: Array<{
      productName: string;
      quantity: number;
      unitPrice: number;
      selectedSizeName: string;
      selectedSweetness: number;
      selectedIce: string;
      selectedToppings?: Array<{ name: string }>;
      note?: string;
    }>;
  }): Promise<void> {
    if (!this.isSmtpConfigured()) {
      this.logger.warn(`[DEV] SMTP not configured. Order confirmation skipped for ${to}`);
      return;
    }

    const fmt = (n: number) =>
      new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n);

    const fmtDate = (d: Date) =>
      new Intl.DateTimeFormat('vi-VN', { dateStyle: 'medium', timeStyle: 'short' }).format(d);

    const paymentLabel: Record<string, string> = {
      cash: 'Tiền mặt khi nhận hàng',
      bank_transfer: 'Chuyển khoản ngân hàng',
      momo: 'Ví MoMo',
    };

    const itemRows = order.items.map((item) => {
      const toppingStr = item.selectedToppings?.length
        ? item.selectedToppings.map(t => t.name).join(', ')
        : '';
      const details = [
        item.selectedSizeName,
        `Đường ${item.selectedSweetness}%`,
        item.selectedIce,
        toppingStr ? `Topping: ${toppingStr}` : '',
        item.note ? `Ghi chú: ${item.note}` : '',
      ].filter(Boolean).join(' • ');

      return `
        <tr class="item-row" style="border-top:1px solid #f0e0ff;">
          <td style="padding:12px 16px;">
            <div class="product-name" style="font-size:14px;font-weight:700;color:#333;">${item.productName}</div>
            <div class="product-detail" style="font-size:12px;color:#999;margin-top:3px;">${details}</div>
          </td>
          <td class="qty-text" align="center" style="font-size:14px;color:#555;padding:12px 8px;white-space:nowrap;">x${item.quantity}</td>
          <td align="right" style="font-size:14px;font-weight:700;color:#CE93D8;padding:12px 16px;white-space:nowrap;">${fmt(item.unitPrice * item.quantity)}</td>
        </tr>`;
    }).join('');

    const customerNoteBlock = order.customerNote
      ? `<tr><td style="padding:16px 40px 0;">
           <table class="note-block" width="100%" cellpadding="0" cellspacing="0" style="background:#fffbee;border-radius:12px;border-left:4px solid #66BB6A;">
             <tr><td class="text-secondary" style="font-size:13px;color:#555;padding:14px 16px;">📝 <strong>Ghi chú:</strong> ${order.customerNote}</td></tr>
           </table>
         </td></tr>`
      : '';

    try {
      await this.transporter.sendMail({
        from: `"Mèo Trà 🐱" <${this.config.get('MAIL_FROM', 'noreply@meotea.vn')}>`,
        to,
        subject: `🧋 Xác nhận đơn hàng ${order.id} – Mèo Trà`,
        html: this.renderTemplate('order-confirmation.html', {
          orderId: order.id,
          customerName: order.customerName,
          customerAddress: order.customerAddress,
          paymentMethod: paymentLabel[order.paymentMethod] ?? order.paymentMethod,
          orderDate: fmtDate(order.createdAt),
          subtotal: fmt(order.subtotal),
          total: fmt(order.total),
          itemRows,
          customerNoteBlock,
        }),
      });
      this.logger.log(`Order confirmation email sent to ${to} for order ${order.id}`);
    } catch (err) {
      this.logger.error(`Failed to send order confirmation to ${to}:`, err);
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
