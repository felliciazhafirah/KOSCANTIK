import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PrismaService } from '../prisma/prisma.service'
import { UserModule } from 'src/user/user.module'

@Module({
  imports: [ 
    UserModule,
    AuthModule,
    JwtModule.register({
      secret: 'SECRET_KEY', // ganti bebas
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, PrismaService],
  controllers: [AuthController],

})
export class AuthModule {}