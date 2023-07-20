import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee-data.dto';
import { UpdateCoffeeDto } from './dto/update-coffee-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CoffeeRepository } from './coffee.repository';
import { Coffee } from './coffee.entity';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(CoffeeRepository)
    private coffeeRepository: CoffeeRepository,
  ) {}

  async getAllCoffee(): Promise<Coffee[]> {
    return this.coffeeRepository.getCoffees();
  }

  async getCoffeeById(id: number): Promise<Coffee> {
    const isFound = await this.coffeeRepository.findOne({ where: { id } });
    if (!isFound) {
      throw new NotFoundException(`Coffee with ID "${id}" not found`);
    }
    return isFound;
  }

  async insertCoffee(createCoffeeDto: CreateCoffeeDto): Promise<Coffee> {
    return this.coffeeRepository.createCoffee(createCoffeeDto);
  }

  async deleteCoffee(id: number) {
    const isDeleted = await this.coffeeRepository.delete(id);
    if (isDeleted.affected === 0) {
      throw new NotFoundException(`Coffee with ID "${id}" not found`);
    } else {
      return {
        code: 200,
        status: 'success',
        message: `Coffee with ID "${id}" has been deleted`,
      };
    }
  }

  async updateCoffee(
    id: number,
    updateCoffeeDto: UpdateCoffeeDto,
  ): Promise<Coffee> {
    const coffee = await this.getCoffeeById(id);
    coffee.brand = updateCoffeeDto.brand;
    coffee.ph = updateCoffeeDto.ph;
    coffee.waterflow = updateCoffeeDto.waterflow;
    await coffee.save();
    return coffee;
  }
}
