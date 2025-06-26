import { Module } from '@nestjs/common';
import DataSource from '@/config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '@/app.controller';
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      ...DataSource.options,
      retryAttempts: 5,
      retryDelay: 5000,
      autoLoadEntities: true
    })
  ],
  controllers: [AppController]
})
export class AppModule {}
