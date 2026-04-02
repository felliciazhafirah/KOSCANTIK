import {
  Body,
  Controller,
  Get,
  Param,
  Query,
  Post,
  Delete,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto)
  }

  @Get()
  findAll(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
) {
  return this.userService.findAll(
    Number(page) || 1,
    Number(limit) || 10,
  )
}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id))
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(Number(id))
  }
}