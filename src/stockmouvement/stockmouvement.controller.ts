import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockmouvementService } from './stockmouvement.service';
import { CreateStockmouvementDto } from './dto/create-stockmouvement.dto';
import { UpdateStockmouvementDto } from './dto/update-stockmouvement.dto';

@Controller('stockmouvement')
export class StockmouvementController {
  constructor(private readonly stockmouvementService: StockmouvementService) {}

  @Post()
  create(@Body() createStockmouvementDto: CreateStockmouvementDto) {
    return this.stockmouvementService.create(createStockmouvementDto);
  }

  @Get()
  findAll() {
    return this.stockmouvementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockmouvementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockmouvementDto: UpdateStockmouvementDto) {
    return this.stockmouvementService.update(+id, updateStockmouvementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockmouvementService.remove(+id);
  }
}
