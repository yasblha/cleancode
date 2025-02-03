import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import  { sequelizedb } from '../../../../sequelize/sequelizedb';

@Module({
  imports: [SequelizeModule.forRoot({
    ...sequelizedb,
    autoLoadModels: true,
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
