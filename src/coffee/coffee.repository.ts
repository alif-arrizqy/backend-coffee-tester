import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Coffee } from './coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee-data.dto';
import { CoffeeStatus } from './coffee-status.enum';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(Coffee)
export class CoffeeRepository extends Repository<Coffee> {
  constructor(private dataSource: DataSource) {
    super(Coffee, dataSource.createEntityManager());
  }

  async getCoffees(): Promise<Coffee[]> {
    const query = this.createQueryBuilder('coffee');
    const coffees = await query.getMany();
    if (coffees.length === 0) {
      throw new NotFoundException('No coffee found');
    }
    return coffees;
  }

  async createCoffee({ brand }: CreateCoffeeDto): Promise<Coffee> {
    const coffee = this.create({
      brand,
      status: CoffeeStatus.BELUM_TERUJI,
    });

    await this.save(coffee);
    return coffee;
  }
}
