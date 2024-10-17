import { PartialType } from '@nestjs/mapped-types';
import { CreateStockmouvementDto } from './create-stockmouvement.dto';

export class UpdateStockmouvementDto extends PartialType(CreateStockmouvementDto) {}
