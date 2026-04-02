import { IsEnum, IsNumber, IsString } from 'class-validator'
import { Type } from 'class-transformer'

export enum Gender {
  male = 'male',
  female = 'female',
  all = 'all',
}

export class CreateKosDto {
  @IsString()
  name: string

  @IsString()
  address: string

  @IsString()
  description: string

  @Type(() => Number)
  @IsNumber()
  pricePerMonth: number

  @IsEnum(Gender)
  gender: Gender
}