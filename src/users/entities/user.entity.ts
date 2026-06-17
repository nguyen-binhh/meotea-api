import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Role } from '../../common/enums/role.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  @Column({ nullable: true })
  media: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  emailVerified: boolean;

  @Column({ nullable: true, type: 'varchar', length: 64 })
  emailVerificationToken: string | null;

  @Column({ nullable: true, type: 'datetime' })
  emailVerificationExpires: Date | null;

  @Column({ nullable: true, type: 'varchar', length: 64 })
  passwordResetToken: string | null;

  @Column({ nullable: true, type: 'datetime' })
  passwordResetExpires: Date | null;

  @Column({ nullable: true, type: 'varchar', length: 80 })
  refreshToken: string | null;

  @Column({ nullable: true, type: 'datetime' })
  refreshTokenExpires: Date | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
