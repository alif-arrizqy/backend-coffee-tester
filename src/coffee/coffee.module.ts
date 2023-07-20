import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRepository } from './coffee.repository';
import { Coffee } from './coffee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  controllers: [CoffeeController],
  providers: [CoffeeService, CoffeeRepository],
})
export class CoffeeModule {}
