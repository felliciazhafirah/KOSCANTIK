import { IsNumber, IsOptional, IsString } from 'class-validator'
import { Type } from 'class-transformer'

export class UpdateFasilitasDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  kosId?: number

  @IsOptional()
  @IsString()
  facility?: string
}