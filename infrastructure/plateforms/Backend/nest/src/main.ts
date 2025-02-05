import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import sequelizedb from './database/sequelizedb';
import './database/mongo.connection';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  try {
    await sequelizedb.authenticate();
    console.log('La connexion à PostgreSQL est réussie.');
  } catch (error) {
    console.log('Erreur de connexion : ', error);
  }
}
bootstrap();
