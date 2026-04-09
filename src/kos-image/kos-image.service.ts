import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateKosImageDto } from './dto/create-kos-image.dto'
import { UpdateKosImageDto } from './dto/update-kos-image.dto'

@Injectable()
export class KosImageService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateKosImageDto) {
    return this.prisma.kosImage.create({
      data: {
        kos_id: dto.kosId, // mapping
        file: dto.file,
      },
    })
  }

  findAll() {
    return this.prisma.kosImage.findMany({
      include: {
        kos: true,
      },
    })
  }

  update(id: number, dto: UpdateKosImageDto) {
    const data: any = {
      ...(dto.kosId && { kos_id: dto.kosId }),
      ...(dto.file && { file: dto.file }),
    }

    return this.prisma.kosImage.update({
      where: { id },
      data,
    })
  }

  remove(id: number) {
    return this.prisma.kosImage.delete({
      where: { id },
    })
  }
}