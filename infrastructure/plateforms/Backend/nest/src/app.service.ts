import { Injectable, Inject } from '@nestjs/common';
import { Sequelize } from 'sequelize';


@Injectable()
export class AppService {
  constructor(
      @Inject('SEQUELIZE') private readonly sequelize: Sequelize,
  ) {}

  async testConnection(): Promise<string> {
    try {
      await this.sequelize.authenticate();
      return 'La connexion à PostgreSQL est réussie.';
    } catch (error) {
      return `Erreur de connexion : ${error}`;
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
