import { Module } from '@nestjs/common'
import { KosModule } from './src/kos/kos.module'
import { UserModule } from './src/user/user.module';
import { BookModule } from './src/book/book.module';
import { KosImageModule } from 'src/kos-image/kos-image.module';

@Module({
  imports: [KosModule, UserModule, BookModule, KosImageModule],
})
export class AppModule {}