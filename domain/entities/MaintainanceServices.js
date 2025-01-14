export class MaintenanceServices {
    id;
    bikeId;
    date;
    description;
    type;
    isResolved;
    cost;
    partsUsed;
    technicianId;
    createdAt;
    updatedAt;
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
