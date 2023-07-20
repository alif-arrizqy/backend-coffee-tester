import { BadRequestException, PipeTransform } from '@nestjs/common';
import { CoffeeStatus } from '../coffee-status.enum';

export class CoffeeStatusValidationPipes implements PipeTransform {
  readonly allowedStatus = [
    CoffeeStatus.BAIK,
    CoffeeStatus.KURANG_BAIK,
    CoffeeStatus.BELUM_TERUJI,
  ];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid status`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatus.indexOf(status);
    return idx !== -1;
  }
}
