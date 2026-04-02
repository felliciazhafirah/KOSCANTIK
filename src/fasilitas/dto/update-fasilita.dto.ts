import { PartialType } from '@nestjs/swagger';
import { CreateFasilitaDto } from './create-fasilita.dto';

export class UpdateFasilitaDto extends PartialType(CreateFasilitaDto) {}
