import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './domain/product.entity';
import { Transaction } from './domain/transaction.entity';
import { Customer } from './domain/customer.entity';
import { Delivery } from './domain/delivery.entity';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Product, Transaction, Customer, Delivery],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Product, Transaction, Customer, Delivery]),
    ProductsModule,
  ],
})
export class AppModule {}
