export class Incidents {
    id;
    bikeId;
    date;
    description;
    isResolved;
    constructor(id, bikeId, date, description, isResolved) {
        this.id = id;
        this.bikeId = bikeId;
        this.date = date;
        this.description = description;
        this.isResolved = isResolved;
    }
}
