import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateKosDto } from './dto/create-kos.dto'
import { UpdateKosDto } from './dto/update-ko.dto'

@Injectable()
export class KosService {
  constructor(private prisma: PrismaService) {}

create(userId: number, dto: CreateKosDto) {
  return this.prisma.kos.create({
    data: {
      name: dto.name,
      address: dto.address,
      price_per_month: dto.pricePerMonth, // ✅ penting
      description : dto.description,
      gender: dto.gender,
      owner: {
        connect: { id: userId },
      },
    },
  })
}

  findAll(gender?: string) {
    return this.prisma.kos.findMany({
      where: gender ? { gender: gender as any } : {},
      include: {
        images: true,
        reviews: true,
      },
    })
  }

update(id: number, dto: UpdateKosDto) {
  return this.prisma.kos.update({
    where: { id },
    data: {
      name: dto.name,
      address: dto.address,
      description: dto.description,
      price_per_month: dto.pricePerMonth, // ✅ mapping
      gender: dto.gender,
    },
  })
}

  remove(id: number) {
    return this.prisma.kos.delete({
      where: { id },
    })
  }
}