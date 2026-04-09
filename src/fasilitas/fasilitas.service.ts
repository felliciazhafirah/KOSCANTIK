import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateKosFacilityDto } from './dto/create-fasilita.dto'
import { UpdateFasilitasDto } from './dto/update-fasilita.dto'

@Injectable()
export class FasilitasService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateKosFacilityDto) {
    return this.prisma.kosFacility.create({
      data: {
        kos_id: dto.kosId,
        facility: dto.facility,
      },
    })
  }   

  findAll() {
    return this.prisma.kosFacility.findMany({
      include: {
        kos: true,
      },
    })
  }

  update(id: number, dto: UpdateFasilitasDto) {
    const data: any = {
      ...(dto.kosId && { kos_id: dto.kosId }),
      ...(dto.facility && { facility: dto.facility }),
    }

    return this.prisma.kosFacility.update({
      where: { id },
      data,
    })
  }

  remove(id: number) {
    return this.prisma.kosFacility.delete({
      where: { id },
    })
  }
}