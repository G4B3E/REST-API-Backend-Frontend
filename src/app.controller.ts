import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import Merevlemez from './merevlemez.entity';
import newMerevlemezDto from './newMerevlemez.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }
  @Post('merevlemez')
  async newMerevlemez(@Body() merevlemez: newMerevlemezDto) {
    const merevlemezRepo = this.dataSource.getRepository(Merevlemez);
    merevlemezRepo.save(merevlemez);
    return merevlemez;
  }
}
