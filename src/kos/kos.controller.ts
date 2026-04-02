import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Body,
  Query,
} from '@nestjs/common'
import { KosService } from './kos.service'
import { CreateKosDto } from './dto/create-kos.dto'

@Controller('kos')
export class KosController {
  constructor(private readonly kosService: KosService) {} 

  @Post(':userId')
  create(
    @Param('userId') userId: string,
    @Body() dto: CreateKosDto,
  ) {
    return this.kosService.create(Number(userId), dto)
  }

  @Get()
  findAll(@Query('gender') gender?: string) {
    return this.kosService.findAll(gender)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.kosService.update(Number(id), dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kosService.remove(Number(id))
  }
}