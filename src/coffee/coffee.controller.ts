import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee-data.dto';
import { UpdateCoffeeDto } from './dto/update-coffee-dto';
import { Coffee } from './coffee.entity';

@Controller('coffee')
export class CoffeeController {
  constructor(private coffeeService: CoffeeService) {}

  @Get()
  getAllCoffee(): Promise<Coffee[]> {
    return this.coffeeService.getAllCoffee();
  }

  @Get('/:id')
  getCoffeeById(@Param('id', ParseIntPipe) id: number): Promise<Coffee> {
    return this.coffeeService.getCoffeeById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  insertCoffee(@Body() createCoffeeDto: CreateCoffeeDto): Promise<Coffee> {
    return this.coffeeService.insertCoffee(createCoffeeDto);
  }

  @Delete('/:id')
  deleteCoffee(@Param('id', ParseIntPipe) id: number) {
    return this.coffeeService.deleteCoffee(id);
  }

  @Patch('/:id')
  updateCoffee(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ): Promise<Coffee> {
    return this.coffeeService.updateCoffee(id, updateCoffeeDto);
  }
}
