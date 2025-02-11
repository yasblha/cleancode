import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import userProvider from "./users.provider";

import {SequelizeUsersRepository} from "@infrastructure/sequelize/repositories/UsersRepository";

@Module({
  controllers: [UsersController],
  providers: [...userProvider, SequelizeUsersRepository],
})
export class UsersModule {}
