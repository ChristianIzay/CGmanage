import { Module } from '@nestjs/common';
import { StockmouvementService } from './stockmouvement.service';
import { StockmouvementController } from './stockmouvement.controller';

@Module({
  controllers: [StockmouvementController],
  providers: [StockmouvementService],
})
export class StockmouvementModule {}
