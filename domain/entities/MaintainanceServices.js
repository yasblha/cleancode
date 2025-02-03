"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceServices = void 0;
class MaintenanceServices {
    constructor(id, bikeId, date, description, type, isResolved, cost, partsUsed, technicianId, createdAt, updatedAt) {
        this.id = id;
        this.bikeId = bikeId;
        this.date = date;
        this.description = description;
        this.type = type;
        this.isResolved = isResolved;
        this.cost = cost;
        this.partsUsed = partsUsed;
        this.technicianId = technicianId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
exports.MaintenanceServices = MaintenanceServices;
//# sourceMappingURL=MaintainanceServices.js.map