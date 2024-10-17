import { Injectable } from '@nestjs/common';
import { CreateStockmouvementDto } from './dto/create-stockmouvement.dto';
import { UpdateStockmouvementDto } from './dto/update-stockmouvement.dto';

@Injectable()
export class StockmouvementService {
  create(createStockmouvementDto: CreateStockmouvementDto) {
    return 'This action adds a new stockmouvement';
  }

  findAll() {
    return `This action returns all stockmouvement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockmouvement`;
  }

  update(id: number, updateStockmouvementDto: UpdateStockmouvementDto) {
    return `This action updates a #${id} stockmouvement`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockmouvement`;
  }
}
