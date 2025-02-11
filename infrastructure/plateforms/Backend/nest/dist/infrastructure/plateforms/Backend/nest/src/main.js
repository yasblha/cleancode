"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
require("../../../../mongo/mongo.connection");
const init_1 = require("../../../../sequelize/init");
const common_1 = require("@nestjs/common");
const http_error_interceptor_1 = require("./middlewares/http-error.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new http_error_interceptor_1.CatchEverythingFilter());
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Bikes API")
        .setDescription("The bikes API description")
        .setVersion("1.0")
        .addBearerAuth({ type: "http", scheme: "bearer", in: "header" })
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("/", app, documentFactory);
    try {
        await (0, init_1.initializeDatabase)();
    }
    catch (error) {
        console.error('Error while initializing database:', error);
    }
    await app.listen(process.env["PORT"] ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map