import sequelizedb from './sequelizedb';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useValue: sequelizedb,
    },
];