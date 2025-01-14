import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from '../prisma.service';
import { BikesModule } from './bikes/bikes.module';


@Module({
  imports: [BikesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
