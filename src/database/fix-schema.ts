import { DataSource } from 'typeorm';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function fixSchema() {
  const ds = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'meotea_db',
  });

  await ds.initialize();

  try {
    await ds.query('SET FOREIGN_KEY_CHECKS = 0');
    await ds.query('DROP TABLE IF EXISTS `comment_reactions`');
    await ds.query('DROP TABLE IF EXISTS `post_reactions`');
    await ds.query('SET FOREIGN_KEY_CHECKS = 1');
    console.log('comment_reactions and post_reactions dropped. Restart the server.');
  } finally {
    await ds.destroy();
  }
}

fixSchema().catch((e) => { console.error(e); process.exit(1); });
