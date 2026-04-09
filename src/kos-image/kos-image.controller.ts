import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
} from '@nestjs/common'
import { KosImageService } from './kos-image.service'
import { CreateKosImageDto } from './dto/create-kos-image.dto'
import { UpdateKosImageDto } from './dto/update-kos-image.dto'

@Controller('kos-image')
export class KosImageController {
  constructor(private readonly service: KosImageService) {}

  @Post()
  create(@Body() dto: CreateKosImageDto) {
    return this.service.create(dto)
  }

  @Get()
  findAll() {
    return this.service.findAll()
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateKosImageDto,
  ) {
    return this.service.update(Number(id), dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id))
  }
}