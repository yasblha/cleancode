import sequelize from './sequelizedb';

async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection to PostgreSQL has been established successfully.');

        await sequelize.sync({ force: true });
        console.log('PostgreSQL database synchronized.');
    } catch (error) {
        console.error('Unable to connect to PostgreSQL:', error);
    }
}

initializeDatabase();