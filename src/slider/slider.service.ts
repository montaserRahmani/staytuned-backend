import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Slider } from './slider.entity';

@Injectable()
export class SliderService extends TypeOrmCrudService<Slider> {
  constructor(@InjectRepository(Slider) repo) {
    super(repo);
  }
}
