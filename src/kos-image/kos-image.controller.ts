import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KosImageService } from './kos-image.service';
import { CreateKosImageDto } from './dto/create-kos-image.dto';
import { UpdateKosImageDto } from './dto/update-kos-image.dto';

@Controller('kos-image')
export class KosImageController {
  constructor(private readonly kosImageService: KosImageService) {}

  @Post()
  create(@Body() createKosImageDto: CreateKosImageDto) {
    return this.kosImageService.create(createKosImageDto);
  }

  @Get()
  findAll() {
    return this.kosImageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kosImageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKosImageDto: UpdateKosImageDto) {
    return this.kosImageService.update(+id, updateKosImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kosImageService.remove(+id);
  }
}
