import { IsEnum, IsNumber, IsString } from 'class-validator'

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

  @IsNumber()
  pricePerMonth: number

  @IsEnum(Gender)
  gender: Gender
}