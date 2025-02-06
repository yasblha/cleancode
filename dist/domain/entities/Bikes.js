"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bikes = void 0;
class Bikes {
    constructor(vin, brand, model, mileage, registrationNumber, purchaseDate, warrantyExpirationDate, ownerId, isActive, isInMaintenance, isDecommissioned, nextMaintenanceMileage, nextMaintenanceDate, createdAt, updatedAt) {
        this.vin = vin;
        this.brand = brand;
        this.model = model;
        this.mileage = mileage;
        this.registrationNumber = registrationNumber;
        this.purchaseDate = purchaseDate;
        this.warrantyExpirationDate = warrantyExpirationDate;
        this.ownerId = ownerId;
        this.isActive = isActive;
        this.isInMaintenance = isInMaintenance;
        this.isDecommissioned = isDecommissioned;
        this.nextMaintenanceMileage = nextMaintenanceMileage;
        this.nextMaintenanceDate = nextMaintenanceDate;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
exports.Bikes = Bikes;
