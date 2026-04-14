import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateKosImageDto } from './dto/create-kos-image.dto'
import { UpdateKosImageDto } from './dto/update-kos-image.dto'

@Injectable()
export class KosImageService {
  constructor(private prisma: PrismaService) {}


  findAll() {
    return this.prisma.kosImage.findMany({
      include: {
        kos: true,
      },
    })
  }

  update(id: number, dto: UpdateKosImageDto) {
    return this.prisma.kosImage.update({
      where: { id },
      data: {
        kos_id: dto.kosId,
        file: dto.file,
      },
    })
  }

  create(kosId: number, filename: string) {
  return this.prisma.kosImage.create({
    data: {
      kos_id: kosId,
      file: filename, // ✅ ini yang benar
    },
  })
}


  remove(id: number) {
    return this.prisma.kosImage.delete({
      where: { id },
    })
  }
}