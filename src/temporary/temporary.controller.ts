import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TemporaryService } from './temporary.service';
import { Temporary } from './temporary.entity';

@Controller('temporary')
export class TemporaryController {
  constructor(private temporary: TemporaryService) {}

  @Get()
  getTemporary(): Promise<Temporary[]> {
    return this.temporary.getTemporary();
  }

  @Post()
  insertTemporary(@Body() temporary: Temporary): Promise<Temporary> {
    return this.temporary.insertTemporary(temporary);
  }

  @Delete('/:id')
  deleteTemporary(@Param('id', ParseIntPipe) id: number) {
    return this.temporary.deleteTemporary(id);
  }
}
