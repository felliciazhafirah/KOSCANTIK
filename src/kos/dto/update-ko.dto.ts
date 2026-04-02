import { PartialType } from '@nestjs/swagger';
import { CreateKoDto } from './create-ko.dto';

export class UpdateKoDto extends PartialType(CreateKoDto) {}
