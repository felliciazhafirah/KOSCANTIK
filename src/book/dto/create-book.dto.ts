import { IsDateString, IsNumber } from 'class-validator'

export class CreateBookDto {
  @IsNumber()
  kosId: number

  @IsNumber()
  userId: number

  @IsDateString()
  startDate: string

  @IsDateString()
  endDate: string
}