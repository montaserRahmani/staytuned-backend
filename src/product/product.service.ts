import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Product } from './product.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProductService extends TypeOrmCrudService<Product> {
  constructor(
    @InjectRepository(Product) repo,
    private configService: ConfigService,
  ) {
    super(repo);
    console.log('=============', this.configService.get<string>('DB_HOST2'));
  }
}
