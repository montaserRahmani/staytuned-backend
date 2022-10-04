import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { NotificationModule } from './notification/notification.module';
import { SliderModule } from './slider/slider.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule, CategoryModule, SliderModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
