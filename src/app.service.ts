import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  dividir(
    num1: number,
    num2: number,
  ): number {

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new BadRequestException('Both inputs must be numbers');
    }

    if (num2 === 0) {
      throw new BadRequestException('Cannot divide by zero');
    }

    return num1 / num2;
  }

}
