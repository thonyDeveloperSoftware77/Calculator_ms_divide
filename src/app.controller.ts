import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('divide')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  dividir(
    @Body('num1') num1: number,
    @Body('num2') num2: number,
  ): number {
    return this.appService.dividir(
      num1,
      num2,
    );
  }
}
