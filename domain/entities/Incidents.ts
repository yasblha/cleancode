export class Incidents {
    public constructor(
        public id: string,
        public bikeId: string,
        public date: Date,
        public description: string,
        public isResolved: boolean,
    ) {}
}