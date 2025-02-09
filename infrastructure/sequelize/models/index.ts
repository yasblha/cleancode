import BikeModel from './BikeModel';
import IncidentModel from './IncidentModels';
import MaintenanceServiceModel from './MaintenanceServiceModel';
import PartModel from './PartModel';
import UserModel from './UserModel';

const models = {
    Bike: BikeModel,
    Incident: IncidentModel,
    MaintenanceService: MaintenanceServiceModel,
    Part: PartModel,
    User: UserModel,
};

// Appel des associations
Object.values(models).forEach((model: any) => {
    if (typeof model.associate === "function") {
        model.associate(models);
    }
});

export default models;