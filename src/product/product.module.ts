import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceSubscriber } from './price.subscriber';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PriceSubscriber],
  imports: [TypeOrmModule.forFeature([Product])],
})
export class ProductModule {}
