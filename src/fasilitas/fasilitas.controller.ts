import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FasilitasService } from './fasilitas.service';
import { CreateFasilitaDto } from './dto/create-fasilita.dto';
import { UpdateFasilitaDto } from './dto/update-fasilita.dto';

@Controller('fasilitas')
export class FasilitasController {
  constructor(private readonly fasilitasService: FasilitasService) {}

  @Post()
  create(@Body() createFasilitaDto: CreateFasilitaDto) {
    return this.fasilitasService.create(createFasilitaDto);
  }

  @Get()
  findAll() {
    return this.fasilitasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fasilitasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFasilitaDto: UpdateFasilitaDto) {
    return this.fasilitasService.update(+id, updateFasilitaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fasilitasService.remove(+id);
  }
}
