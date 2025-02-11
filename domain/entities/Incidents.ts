export class Incidents {
    constructor(
        public id: number,
        public bikeId: number,
        public date: Date,
        public description: string,
        public isResolved: boolean,
    ) {}
}