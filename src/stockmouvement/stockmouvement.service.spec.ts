import { Test, TestingModule } from '@nestjs/testing';
import { StockmouvementService } from './stockmouvement.service';

describe('StockmouvementService', () => {
  let service: StockmouvementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockmouvementService],
    }).compile();

    service = module.get<StockmouvementService>(StockmouvementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
