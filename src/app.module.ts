import { Module } from '@nestjs/common';
import { CoffeeModule } from './coffee/coffee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [CoffeeModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
