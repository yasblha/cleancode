import { Incidents } from '../entities/Incidents';

export interface IncidentsRepository {
    create(incident: Incidents): Promise<Incidents>;
    findAll(): Promise<Incidents[]>;
    findOne(id: string): Promise<Incidents | null>;
    update(id: string, incident: Partial<Incidents>): Promise<Incidents | null>;
    remove(id: string): Promise<boolean>;
    findByBikeId(bikeId: string): Promise<Incidents[]>;
}