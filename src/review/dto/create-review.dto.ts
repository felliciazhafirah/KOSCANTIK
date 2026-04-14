import { IsNumber, IsString } from 'class-validator'

export class CreateReviewDto {
  @IsNumber()
  kosId: number

  @IsNumber()
  userId: number

  @IsString()
  comment: string
}