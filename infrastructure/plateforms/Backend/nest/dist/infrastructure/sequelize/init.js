"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDatabase = initializeDatabase;
const sequelizedb_1 = require("./sequelizedb");
async function initializeDatabase() {
    try {
        await sequelizedb_1.default.authenticate();
        console.log("Connection to PostgreSQL has been established successfully.");
        await sequelizedb_1.default.sync({ alter: true, force: false });
        console.log("PostgreSQL database synchronized.");
    }
    catch (error) {
        console.error("Unable to connect to PostgreSQL:", error);
    }
}
initializeDatabase();
//# sourceMappingURL=init.js.map