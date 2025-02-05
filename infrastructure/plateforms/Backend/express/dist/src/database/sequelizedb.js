"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizedb = void 0;
const sequelize_1 = require("sequelize");
exports.sequelizedb = new sequelize_1.Sequelize({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST || 'postgres',
    port: parseInt(process.env.POSTGRES_PORT || '5432'),
    username: process.env.POSTGRES_USER || 'admin',
    password: process.env.POSTGRES_PASSWORD || 'password',
    database: process.env.POSTGRES_DB || 'moto_management',
    logging: false,
});
exports.default = exports.sequelizedb;
//# sourceMappingURL=sequelizedb.js.map