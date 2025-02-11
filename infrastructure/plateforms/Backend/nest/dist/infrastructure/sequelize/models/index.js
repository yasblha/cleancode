"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BikeModel_1 = require("./BikeModel");
const IncidentModels_1 = require("./IncidentModels");
const MaintenanceServiceModel_1 = require("./MaintenanceServiceModel");
const PartModel_1 = require("./PartModel");
const UserModel_1 = require("./UserModel");
const models = {
    Bike: BikeModel_1.default,
    Incident: IncidentModels_1.default,
    MaintenanceService: MaintenanceServiceModel_1.default,
    Part: PartModel_1.default,
    User: UserModel_1.default,
};
Object.values(models).forEach((model) => {
    if (typeof model.associate === "function") {
        model.associate(models);
    }
});
exports.default = models;
//# sourceMappingURL=index.js.map