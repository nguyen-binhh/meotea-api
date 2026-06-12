import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { CategoriesService } from '../../categories/categories.service';
import { ProductsService } from '../../products/products.service';
import { UsersService } from '../../users/users.service';
import { PostsService } from '../../posts/posts.service';
import { categoryData, productData, postData } from './data';
import { Role } from '../../common/enums/role.enum';
import { DataSource } from 'typeorm';
import * as bcrypt from 'bcryptjs';

const isReset = process.argv.includes('--reset');

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const categoriesService = app.get(CategoriesService);
  const productsService   = app.get(ProductsService);
  const usersService      = app.get(UsersService);
  const postsService      = app.get(PostsService);
  const dataSource        = app.get(DataSource);

  console.log('🌱 Starting seed...');

  // ── Reset tables if --reset flag ─────────────────────────────────────────
  if (isReset) {
    console.log('⚠️  --reset: truncating product_toppings, product_sizes, products, categories...');
    await dataSource.query('SET FOREIGN_KEY_CHECKS = 0');
    await dataSource.query('TRUNCATE TABLE `product_toppings`');
    await dataSource.query('TRUNCATE TABLE `product_sizes`');
    await dataSource.query('TRUNCATE TABLE `products`');
    await dataSource.query('TRUNCATE TABLE `categories`');
    await dataSource.query('TRUNCATE TABLE `posts`');
    await dataSource.query('SET FOREIGN_KEY_CHECKS = 1');
    console.log('✅ Tables cleared.');
  }

  // ── Super admin ──────────────────────────────────────────────────────────
  const existing = await usersService.findByEmail('superadmin@meotea.vn');
  if (!existing) {
    await usersService.create({
      email:    'superadmin@meotea.vn',
      password: await bcrypt.hash('SuperAdmin@123', 10),
      name:     'Super Admin',
      role:     Role.SUPER_ADMIN,
    });
    console.log('👤 Created super admin: superadmin@meotea.vn / SuperAdmin@123');
  } else {
    console.log('👤 Super admin already exists, skipping.');
  }

  // ── Categories ───────────────────────────────────────────────────────────
  const existingCats = await categoriesService.findAll();
  if (existingCats.length === 0) {
    for (const cat of categoryData) {
      await categoriesService.create(cat);
    }
    console.log(`📂 Seeded ${categoryData.length} categories.`);
  } else {
    console.log(`📂 Categories already exist (${existingCats.length}), skipping. Use --reset to re-seed.`);
  }

  // ── Build category map ───────────────────────────────────────────────────
  const allCats = await categoriesService.findAll();
  const categoryMap: Record<string, number> = {};
  for (const cat of allCats) {
    categoryMap[cat.slug] = cat.id;
  }

  // ── Products ─────────────────────────────────────────────────────────────
  const existingProds = await productsService.findAll({ page: 1, limit: 1 });
  if (existingProds.meta.total === 0) {
    for (const prod of productData) {
      const { categorySlug, ...rest } = prod;
      await productsService.create({
        ...rest,
        categoryId: categoryMap[categorySlug],
      });
    }
    console.log(`🧋 Seeded ${productData.length} products.`);
  } else {
    console.log(`🧋 Products already exist (${existingProds.meta.total}), skipping. Use --reset to re-seed.`);
  }

  // ── Posts ────────────────────────────────────────────────────────────────────
  const existingPosts = await postsService.findAll(false, 1, 1);
  if (existingPosts.meta.total === 0) {
    for (const post of postData) {
      const { slug, ...rest } = post;
      await postsService.create(rest);
    }
    console.log(`📰 Seeded ${postData.length} posts.`);
  } else {
    console.log(`📰 Posts already exist (${existingPosts.meta.total}), skipping. Use --reset to re-seed.`);
  }

  console.log('✅ Seed complete!');
  await app.close();
}

seed().catch((e) => {
  console.error('❌ Seed error:', e);
  process.exit(1);
});
