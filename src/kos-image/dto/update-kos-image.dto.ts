import { IsNumber, IsOptional, IsString } from 'class-validator'
import { Type } from 'class-transformer'

export class UpdateKosImageDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  kosId?: number

  @IsOptional()
  @IsString()
  file?: string
}