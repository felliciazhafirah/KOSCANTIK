import { PartialType } from '@nestjs/swagger';
import { CreateKosImageDto } from './create-kos-image.dto';

export class UpdateKosImageDto extends PartialType(CreateKosImageDto) {}
