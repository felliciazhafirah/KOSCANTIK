import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

 async create(dto: CreateUserDto) {
  const hashedPassword = await bcrypt.hash(dto.password, 10)

  return this.prisma.user.create({
    data: {
      name: dto.name,
      email: dto.email,
      password: hashedPassword, // ✅ hash
      phone: dto.phone,
      role: dto.role,
    },
  })
}

async update(id: number, dto: UpdateUserDto) {
  const data: any = {
    ...(dto.name && { name: dto.name }),
    ...(dto.email && { email: dto.email }),
    ...(dto.phone && { phone: dto.phone }),
    ...(dto.role && { role: dto.role }),
  }

  // 🔐 kalau password diisi → hash
  if (dto.password) {
    data.password = await bcrypt.hash(dto.password, 10)
  }

  return this.prisma.user.update({
    where: { id },
    data,
  })
}

  async findAll(page = 1, limit = 10) {
  const skip = (page - 1) * limit

  return this.prisma.user.findMany({
    skip,
    take: limit,
  })
}

  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        kos: true,
        reviews: true,
        books: true,
      },
    })
  }

async remove(id: number) {
  await this.prisma.user.delete({
    where: { id },
  })

  return {
    message: 'User berhasil dihapus',
  }
}
}

