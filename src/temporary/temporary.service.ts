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

  async getTemporaryById(id: number): Promise<Temporary> {
    const isFound = await this.temporaryRepository.findOne({ where: { id } });
    if (!isFound) {
      throw new Error(`Coffee test with ID "${id}" not found`);
    }
    return isFound;
  }

  async insertTemporary(temporary: Temporary): Promise<Temporary> {
    return this.temporaryRepository.createTemporary(temporary);
  }

  async deleteTemporary(id: number) {
    return this.temporaryRepository.deleteTemporary(id);
  }
}
