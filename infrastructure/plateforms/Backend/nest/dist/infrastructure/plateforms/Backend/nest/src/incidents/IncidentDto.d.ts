import { Incidents } from "@domain/entities/Incidents";
export declare class IncidentDto implements Partial<Incidents> {
    readonly identifier: string;
    readonly date: Date;
    readonly description: string;
    readonly isResolved: boolean;
    readonly bikeVin: string;
}
export declare class UpdateIncidentDto implements Partial<Incidents> {
    readonly date?: Date;
    readonly description?: string;
    readonly isResolved?: boolean;
    readonly bikeVin?: string;
}
