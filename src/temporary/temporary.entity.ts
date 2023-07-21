import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Temporary extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'float',
  })
  ph: number;

  @Column({
    type: 'float',
  })
  waterflow: number;

  @Column()
  status: string;
}
