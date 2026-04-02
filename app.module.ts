import { Module } from '@nestjs/common'
import { KosModule } from './src/kos/kos.module'

@Module({
  imports: [KosModule],
})
export class AppModule {}