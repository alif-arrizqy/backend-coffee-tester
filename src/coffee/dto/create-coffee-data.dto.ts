import { IsNotEmpty } from 'class-validator';

export class CreateCoffeeDto {
  @IsNotEmpty()
  brand: string;
}
