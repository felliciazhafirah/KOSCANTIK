import { PartialType } from '@nestjs/mapped-types'
import { CreateKosImageDto } from './create-kos-image.dto'

export class UpdateKosImageDto extends PartialType(CreateKosImageDto) {}