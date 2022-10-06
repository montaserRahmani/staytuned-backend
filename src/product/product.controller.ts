import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Crud({
  model: {
    type: Product,
  },
  query: {
    exclude: ['id'],
    join: {
      category: {
        eager: true,
      },
    },
  },
})
@Controller('product')
export class ProductController implements CrudController<Product> {
  constructor(readonly service: ProductService) {}
}
