import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateReviewDto } from './dto/create-review.dto'
import { UpdateReviewDto } from './dto/update-review.dto'

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) { }

  create(dto: CreateReviewDto) {
    return this.prisma.review.create({
      data: {
        kos_id: dto.kosId,
        user_id: dto.userId,
        comment: dto.comment,
      },
    })
  }

  findAll() {
    return this.prisma.review.findMany({
      include: {
        kos: true,
        user: true,
      },
    })
  }

  findByKosId(kosId: number) {
    return this.prisma.review.findMany({
      where: {
        kos_id: kosId,
      },
      include: {
        user: true, // biar tau siapa yg review
      },
    })
  }

  update(id: number, dto: UpdateReviewDto) {
    return this.prisma.review.update({
      where: { id },
      data: {
        kos_id: dto.kosId,
        user_id: dto.userId,
        comment: dto.comment,
      },
    })
  }

  remove(id: number) {
    return this.prisma.review.delete({
      where: { id },
    })
  }
}