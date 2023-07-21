import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coffee extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column({
    nullable: true,
    type: 'float',
  })
  ph: number;

  @Column({
    type: 'float',
    nullable: true,
  })
  waterflow: number;

  @Column()
  status: string;
}
