import sequelize from './sequelizedb';
import models from './models';

export async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection to PostgreSQL has been established successfully.');

        // Exemple d'harmonisation : on suppose que dans vos modèles Incident et MaintenanceService, la colonne est "bikeId"
        /*models.Bike.hasMany(models.Incident, { foreignKey: 'bikeId', sourceKey: 'vin' });
        models.Incident.belongsTo(models.Bike, { foreignKey: 'bikeId', targetKey: 'vin' });

        models.Bike.hasMany(models.MaintenanceService, { foreignKey: 'bikeId', sourceKey: 'vin' });
        models.MaintenanceService.belongsTo(models.Bike, { foreignKey: 'bikeId', targetKey: 'vin' });

        // Relations Many-to-Many entre Bike et Part via la table "BikeParts"
        models.Bike.belongsToMany(models.Part, {
            through: 'BikeParts',
            foreignKey: 'bikeVin',
            otherKey: 'partId',
        });
        models.Part.belongsToMany(models.Bike, {
            through: 'BikeParts',
            foreignKey: 'partId',
            otherKey: 'bikeVin',
        });

        // Many-to-Many entre MaintenanceService et Part via "MaintenanceServiceParts"
        models.MaintenanceService.belongsToMany(models.Part, {
            through: 'MaintenanceServiceParts',
            foreignKey: 'maintenanceServiceId',
            otherKey: 'partId',
        });
        models.Part.belongsToMany(models.MaintenanceService, {
            through: 'MaintenanceServiceParts',
            foreignKey: 'partId',
            otherKey: 'maintenanceServiceId',
        });

        // Association entre Bike et User (le propriétaire)
        models.Bike.belongsTo(models.User, { foreignKey: 'ownerId', targetKey: 'id' });
        models.User.hasMany(models.Bike, { foreignKey: 'ownerId', sourceKey: 'id' });

        // Association entre MaintenanceService et User (le technicien)
        models.MaintenanceService.belongsTo(models.User, { foreignKey: 'technicianId', targetKey: 'id' });

        models.User.hasMany(models.MaintenanceService, { foreignKey: 'technicianId', sourceKey: 'id' });*/

        await sequelize.sync();
        console.log('PostgreSQL database synchronized.');
    } catch (error) {
        console.error('Unable to connect to PostgreSQL:', error);
    }
}

initializeDatabase();
