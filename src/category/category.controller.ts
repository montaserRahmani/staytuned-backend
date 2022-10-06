import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Crud({
  model: {
    type: Category,
  },
  query: {
    exclude: ['id'],
    join: {
      products: {
        eager: true,
      },
    },
  },
})
@Controller('category')
export class CategoryController implements CrudController<Category> {
  constructor(readonly service: CategoryService) {}
}
