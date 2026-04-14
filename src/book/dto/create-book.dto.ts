import { IsDateString, IsEnum, IsNumber } from 'class-validator'
import { BookStatus } from '@prisma/client'

export class CreateBookDto {
  @IsNumber()
  kosId: number

  @IsNumber()
  userId: number

  @IsDateString()
  startDate: string

  @IsDateString()
  endDate: string

  @IsEnum(BookStatus)
  status: BookStatus
}