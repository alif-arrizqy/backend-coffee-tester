import { Module } from '@nestjs/common';
import { CoffeeModule } from './coffee/coffee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { TemporaryModule } from './temporary/temporary.module';

@Module({
  imports: [
    CoffeeModule,
    TemporaryModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
})
export class AppModule {}
