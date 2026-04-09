import { IsNumber, IsString } from 'class-validator'
import { Type } from 'class-transformer'

export class CreateKosFacilityDto {
  @Type(() => Number)
  @IsNumber()
  kosId: number

  @IsString()
  facility: string
}