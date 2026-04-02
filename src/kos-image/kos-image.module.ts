import { Module } from '@nestjs/common';
import { KosImageService } from './kos-image.service';
import { KosImageController } from './kos-image.controller';

@Module({
  controllers: [KosImageController],
  providers: [KosImageService],
})
export class KosImageModule {}
