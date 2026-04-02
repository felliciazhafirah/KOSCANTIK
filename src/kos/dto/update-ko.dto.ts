import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'
import { Type } from 'class-transformer'
import { Gender } from '@prisma/client'

export class UpdateKosDto {
  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsString()
  address?: string

  @IsOptional()
  @IsString()
  description?: string

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  pricePerMonth?: number

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender
}