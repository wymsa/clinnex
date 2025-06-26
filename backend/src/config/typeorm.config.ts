import { join } from 'node:path';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  synchronize: false,
  url: process.env.DATABASE_URL,
  logging: process.env.NODE_ENV === 'development',
  entities: [join(__dirname, '..', '**', '*.entity.{js,ts}')],
  migrations: [join(__dirname, '..', '..', 'migrations', '*.{js,ts}')]
});
