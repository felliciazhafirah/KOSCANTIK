import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateBookDto } from './dto/create-book.dto'

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateBookDto) {
    const kos = await this.prisma.kos.findUnique({
      where: { id: dto.kosId },
    })

    if (!kos) throw new Error('Kos tidak ditemukan')

    return this.prisma.book.create({
      data: {
        ...dto,
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate),
        totalPrice: kos.pricePerMonth,
      },
    })
  }

  updateStatus(id: number, status: 'accepted' | 'rejected') {
    return this.prisma.book.update({
      where: { id },
      data: { status },
    })
  }

  history(ownerId: number) {
    return this.prisma.book.findMany({
      where: {
        kos: {
          userId: ownerId,
        },
      },
      include: {
        kos: true,
        user: true,
      },
    })
  }
}