import { Module } from '@nestjs/common'
import { KosImageService } from './kos-image.service'
import { KosImageController } from './kos-image.controller'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  controllers: [KosImageController],
  providers: [KosImageService, PrismaService],
})
export class KosImageModule {}