import { IsNumber, IsString } from 'class-validator'
import { Type } from 'class-transformer'

export class CreateKosImageDto {
  @Type(() => Number)
  @IsNumber()
  kosId: number

  @IsString()
  file: string
}