import { Module } from "@nestjs/common";
import { BikesController } from "./bikes.controller";
import bikesProvider from "./bikes.provider";

import {SequelizeBikesRepository} from "@infrastructure/sequelize/repositories/BikesRepository";

@Module({
  controllers: [BikesController],
  providers: [SequelizeBikesRepository, ...bikesProvider],
})
export class BikesModule {}
