import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { KosImageService } from './kos-image.service' 
import type { Express } from 'express'     

@Controller('kos-image')
export class KosImageController {
  constructor(private readonly kosImageService: KosImageService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  upload(
  @UploadedFile() file: Express.Multer.File,
  @Body('kosId') kosId: string,
) {
  return this.kosImageService.create(
    Number(kosId),
    file.filename, // ✅ ini yang dikirim
  )
}

}