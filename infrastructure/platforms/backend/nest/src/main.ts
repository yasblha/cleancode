import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import SequelizeConnector from '@app/sequelize/sequelize';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Bikes API')
  .setDescription('The bikes API description')
  .setVersion('1.0')
  .addTag('bikes')
  .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, documentFactory);


  const sequelizeConnector = new SequelizeConnector();
  await sequelizeConnector.connect();

  await app.listen(process.env['PORT'] ?? 3001);
}

bootstrap();

