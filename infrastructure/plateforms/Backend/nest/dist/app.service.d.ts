import { Sequelize } from 'sequelize-typescript';
export declare class AppService {
    private readonly sequelize;
    getHello(): string;
    constructor(sequelize: Sequelize);
    testConnection(): Promise<string>;
}
