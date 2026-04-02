import { Module } from '@nestjs/common'
import { KosModule } from './src/kos/kos.module'
import { UserModule } from './src/user/user.module';
import { BookModule } from './src/book/book.module';

@Module({
  imports: [KosModule, UserModule, BookModule],
})
export class AppModule {}