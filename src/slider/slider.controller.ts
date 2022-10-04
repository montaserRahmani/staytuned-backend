import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Slider } from './slider.entity';
import { SliderService } from './slider.service';

@Crud({
  model: {
    type: Slider,
  },
})
@Controller('slider')
export class SliderController implements CrudController<Slider> {
  constructor(readonly service: SliderService) {}
}
