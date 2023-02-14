import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export default class Merevlemez {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tarhely: number;

  @Column()
  marka: string;

  @Column()
  sebesseg: number;
}
