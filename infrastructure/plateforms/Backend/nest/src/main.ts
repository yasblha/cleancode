import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import sequelizedb from './database/sequelizedb';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  try {
    await sequelizedb.authenticate();
    console.log('La connexion à PostgreSQL a été établie avec succès.');
  } catch (error) {
    console.error('Impossible de se connecter à PostgreSQL :', error);
  }
}
bootstrap();
