import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres', // type of database
  host: 'localhost', // host of database
  port: 5432, // port of database
  username: 'postgres', // username of database
  password: 'rpl654321', // password of database
  database: 'coffee_tester', // name of database
  entities: [__dirname + '/../**/*.entity.{js, ts}'], // entities of database
  synchronize: true, // synchronize database
};
