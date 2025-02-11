import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

import '@infrastructure/mongo/mongo.connection';
import { initializeDatabase } from "@infrastructure/sequelize/init";
import { ValidationPipe } from "@nestjs/common";
import { CatchEverythingFilter } from "./middlewares/http-error.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new CatchEverythingFilter());

  const config = new DocumentBuilder()
    .setTitle("Bikes API")
    .setDescription("The bikes API description")
    .setVersion("1.0")
    .addBearerAuth({ type: "http", scheme: "bearer", in: "header" })
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/", app, documentFactory);

  try {
    await initializeDatabase();
  } catch (error) {
    console.error('Error while initializing database:', error);
  }

  //const mongooseConnector = new MongooseConnector();
  //await mongooseConnector.connect();

  await app.listen(process.env["PORT"] ?? 3000);
}

bootstrap();
