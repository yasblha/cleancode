import { Module } from "@nestjs/common";
import { PartsController } from "./parts.controller";
import partsProvider from "./part.provider";

import {SequelizePartsRepository} from "@infrastructure/sequelize/repositories/PartsRepository";

@Module({
  controllers: [PartsController],
  providers: [SequelizePartsRepository, ...partsProvider],
})
export class PartsModule {}
