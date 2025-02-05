"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelizedb_1 = require("./sequelizedb");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useValue: sequelizedb_1.default,
    },
];
//# sourceMappingURL=database.providers.js.map