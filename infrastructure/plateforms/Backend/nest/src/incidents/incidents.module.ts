import { Module } from "@nestjs/common";
import { IncidentsController } from "./incidents.controller";
import incidentsProvider from "./incidents.provider";

import {SequelizeIncidentsRepository} from "@infrastructure/sequelize/repositories/IncidentsRepository";

@Module({
  controllers: [IncidentsController],
  providers: [SequelizeIncidentsRepository, ...incidentsProvider],
})
export class IncidentsModule {}
