import { Test, TestingModule } from '@nestjs/testing';
import { StockmouvementController } from './stockmouvement.controller';
import { StockmouvementService } from './stockmouvement.service';

describe('StockmouvementController', () => {
  let controller: StockmouvementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockmouvementController],
      providers: [StockmouvementService],
    }).compile();

    controller = module.get<StockmouvementController>(StockmouvementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
