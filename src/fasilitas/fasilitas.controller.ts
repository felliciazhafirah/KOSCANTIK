import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
} from '@nestjs/common'
import { FasilitasService } from './fasilitas.service'
import { CreateKosFacilityDto } from './dto/create-fasilita.dto'
import { UpdateFasilitasDto } from './dto/update-fasilita.dto'

@Controller('fasilitas')
export class FasilitasController {
  constructor(private readonly service: FasilitasService) {}

  @Post()
  create(@Body() dto: CreateKosFacilityDto) {
    return this.service.create(dto)
  }

  @Get()
  findAll() {
    return this.service.findAll()
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateFasilitasDto,
  ) {
    return this.service.update(Number(id), dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id))
  }
}