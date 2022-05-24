import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column({ length: 1024 })
  image: string;
  @Column({ default: 0 })
  likes: number;
}
