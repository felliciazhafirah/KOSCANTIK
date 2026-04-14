import { IsNumber, IsString } from 'class-validator'

export class CreateKosImageDto {
  @IsNumber()
  kosId: number

  @IsString()
  file: string
}