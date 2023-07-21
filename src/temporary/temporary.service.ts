import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TemporaryRepository } from './temporary.repository';
import { Temporary } from './temporary.entity';

@Injectable()
export class TemporaryService {
  constructor(
    @InjectRepository(TemporaryRepository)
    private temporaryRepository: TemporaryRepository,
  ) {}

  async getTemporary(): Promise<Temporary[]> {
    return this.temporaryRepository.getTemporary();
  }

  async insertTemporary(temporary: Temporary): Promise<Temporary> {
    return this.temporaryRepository.createTemporary(temporary);
  }

  async deleteTemporary(id: number) {
    return this.temporaryRepository.deleteTemporary(id);
  }
}
