import BikeModel from "./BikeModel";
import IncidentModel from "./IncidentModels";
import MaintenanceServiceModel from "./MaintenanceServiceModel";
import PartModel from "./PartModel";
import UserModel from "./UserModel";
declare const models: {
    Bike: typeof BikeModel;
    Incident: typeof IncidentModel;
    MaintenanceService: typeof MaintenanceServiceModel;
    Part: typeof PartModel;
    User: typeof UserModel;
};
export default models;
