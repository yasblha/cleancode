export class Bikes {
    id;
    brand;
    model;
    mileage;
    vin;
    purchaseDate;
    warrantyExpirationDate;
    ownerId;
    isActive;
    isInMaintenance;
    isDecommissioned;
    nextMaintenanceMileage;
    nextMaintenanceDate;
    createdAt;
    updatedAt;
    constructor(id, brand, model, mileage, vin, purchaseDate, warrantyExpirationDate, ownerId, isActive, isInMaintenance, isDecommissioned, nextMaintenanceMileage, nextMaintenanceDate, createdAt, updatedAt) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.mileage = mileage;
        this.vin = vin;
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
