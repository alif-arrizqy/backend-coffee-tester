import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres', // type of database
  host: 'db', // host of database
  port: 5433, // port of database
  username: 'postgres', // username of database
  password: 'postgres', // password of database
  database: 'coffee_tester', // name of database
  entities: [__dirname + '/../**/*.entity.{js, ts}'], // entities of database
  synchronize: true, // synchronize database
};
