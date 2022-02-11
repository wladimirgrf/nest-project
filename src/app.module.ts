import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
