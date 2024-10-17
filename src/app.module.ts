/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { PaymentModule } from './payment/payment.module';
import { StockmovementModule } from './stockmovement/stockmovement.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { StockmouvementModule } from './stockmouvement/stockmouvement.module';
import { PaymentModule } from './product/payment/payment.module';
import { PaymentModule } from './payment/payment.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nesttest',
      entities: [  ], // vous devez spécifier les entités à utiliser
      synchronize: true,
    }),
    CategoryModule,
    UserModule,
    ProductModule,
    PaymentModule,
    StockmovementModule,
    StockmouvementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}