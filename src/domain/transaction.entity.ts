import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: 'PENDING' | 'COMPLETED' | 'FAILED';

  @Column()
  transactionNumber: string;

  @ManyToOne(() => Product)
  product: Product;

  @Column('decimal')
  totalAmount: number;
}
