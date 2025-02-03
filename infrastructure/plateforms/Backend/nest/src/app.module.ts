import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
//import { SequelizeModule } from '@nestjs/sequelize';
//import  { sequelizedb } from '../../../../sequelize/sequelizedb';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
