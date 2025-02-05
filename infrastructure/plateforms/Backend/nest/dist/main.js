"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const sequelizedb_1 = require("./database/sequelizedb");
require("./database/mongo.connection");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT ?? 3000);
    try {
        await sequelizedb_1.default.authenticate();
        console.log('La connexion à PostgreSQL est réussie.');
    }
    catch (error) {
        console.log('Erreur de connexion : ', error);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map