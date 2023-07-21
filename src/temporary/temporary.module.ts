import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Temporary } from './temporary.entity';
import { TemporaryController } from './temporary.controller';
import { TemporaryService } from './temporary.service';
import { TemporaryRepository } from './temporary.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Temporary])],
  controllers: [TemporaryController],
  providers: [TemporaryService, TemporaryRepository],
})
export class TemporaryModule {}
