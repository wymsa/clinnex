import 'dotenv/config';
import 'tsconfig-paths/register';

import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  await app.listen(configService.getOrThrow<number>('APP_PORT'));
}
bootstrap();
