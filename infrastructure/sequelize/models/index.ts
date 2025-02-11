import sequelizedb from "../sequelizedb";
import BikeModel from "./BikeModel";
import IncidentModel from "./IncidentModels";
import MaintenanceServiceModel from "./MaintenanceModel";
import PartModel from "./PartModel";
import UserModel from "./UserModel";

const models = {
    Bike: BikeModel,
    Incident: IncidentModel,
    MaintenanceService: MaintenanceServiceModel,
    Part: PartModel,
    User: UserModel,
};

Object.values(models).forEach((model: any) => {
    if (typeof model.associate === "function") {
        model.associate(models);
    }
});


export default models;
