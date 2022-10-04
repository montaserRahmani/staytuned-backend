import { Module } from '@nestjs/common';
import { SliderService } from './slider.service';
import { SliderController } from './slider.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slider } from './slider.entity';

@Module({
  controllers: [SliderController],
  providers: [SliderService],
  imports: [TypeOrmModule.forFeature([Slider])],
})
export class SliderModule {}
