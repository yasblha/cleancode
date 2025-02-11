import sequelize from "./sequelizedb";
import models from "./models";

export async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log("Connection to PostgreSQL has been established successfully.");

        await sequelize.sync({ alter: true, force: false });
        console.log("PostgreSQL database synchronized.");
    } catch (error) {
        console.error("Unable to connect to PostgreSQL:", error);
    }
}

initializeDatabase();
