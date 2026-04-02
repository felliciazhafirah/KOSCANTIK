import { IsEmail, IsEnum, IsString } from 'class-validator'
import { Role } from '@prisma/client'

export class CreateUserDto {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  password: string

  @IsString()
  phone: string

  @IsEnum(Role)
  role: Role
}