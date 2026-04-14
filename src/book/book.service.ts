import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateBookDto } from './dto/create-book.dto'
import { UpdateBookDto } from './dto/update-book.dto'

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateBookDto) {
    return this.prisma.book.create({
      data: {
        kos_id: dto.kosId,
        user_id: dto.userId,
        start_date: new Date(dto.startDate),
        end_date: new Date(dto.endDate),
        status: dto.status,
      },
    })
  }

  findAll() {
    return this.prisma.book.findMany({
      include: {
        kos: true,
        user: true,
      },
    })
  }

  update(id: number, dto: UpdateBookDto) {
    return this.prisma.book.update({
      where: { id },
      data: {
        kos_id: dto.kosId,
        user_id: dto.userId,
        start_date: dto.startDate ? new Date(dto.startDate) : undefined,
        end_date: dto.endDate ? new Date(dto.endDate) : undefined,
        status: dto.status,
      },
    })
  }

  remove(id: number) {
    return this.prisma.book.delete({
      where: { id },
    })
  }
}