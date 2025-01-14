import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';

import { Bikes } from './models/Bikes';

export const sequelize = new Sequelize({
  dialect: PostgresDialect,
  models: [Bikes],
});