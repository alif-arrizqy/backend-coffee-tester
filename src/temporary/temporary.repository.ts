import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Temporary } from './temporary.entity';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(Temporary)
export class TemporaryRepository extends Repository<Temporary> {
  constructor(private dataSource: DataSource) {
    super(Temporary, dataSource.createEntityManager());
  }

  async getTemporary(): Promise<Temporary[]> {
    const query = this.createQueryBuilder('temporary');
    // const temporary = await query.getMany();
    // descending order
    query.orderBy('temporary.id', 'DESC');
    // limit
    query.limit(1);
    const temporary = await query.getMany();
    return temporary;
  }

  async createTemporary({
    ph,
    waterflow,
    status,
  }: Temporary): Promise<Temporary> {
    // ph to fixed
    ph = parseFloat(ph.toFixed(2));
    // waterflow to fixed
    waterflow = parseFloat(waterflow.toFixed(2));
    console.log(ph, waterflow, status);
    const temporary = this.create({
      ph,
      waterflow,
      status,
    });

    await this.save(temporary);
    return temporary;
  }

  async deleteTemporary(id: number) {
    const isDeleted = await this.delete(id);
    if (isDeleted.affected === 0) {
      throw new NotFoundException(`Coffee with ID "${id}" not found`);
    } else {
      return {
        statusCode: 200,
        message: `Coffee with ID "${id}" has been deleted`,
      };
    }
  }
}
