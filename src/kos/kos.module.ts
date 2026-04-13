import { Module } from '@nestjs/common';
import { KosService } from './kos.service';
import { KosController } from './kos.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [KosController],
  providers: [KosService, PrismaService ],
})
export class KosModule {}
