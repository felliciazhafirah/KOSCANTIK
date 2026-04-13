import { Module } from '@nestjs/common'
import { KosModule } from './src/kos/kos.module'
import { UserModule } from './src/user/user.module';
import { BookModule } from './src/book/book.module';
import { KosImageModule } from 'src/kos-image/kos-image.module';
import { FasilitasModule } from './src/fasilitas/fasilitas.module';

@Module({
  imports: [KosModule, FasilitasModule, UserModule, BookModule, KosImageModule],
})
export class AppModule {}