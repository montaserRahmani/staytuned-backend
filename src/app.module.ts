import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { NotificationModule } from './notification/notification.module';
import { SliderModule } from './slider/slider.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category/category.entity';
import { Product } from './product/product.entity';
import { Slider } from './slider/slider.entity';
import { Notification } from './notification/notification.entity';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    ProductModule,
    CategoryModule,
    SliderModule,
    NotificationModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123123',
      database: 'staytuned',
      entities: [Category, Product, Notification, Slider],
      // For dev purposes, not to be used with production
      synchronize: true,
    }),
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
