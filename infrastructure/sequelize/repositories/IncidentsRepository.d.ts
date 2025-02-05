import { Incidents } from '@domain/entities/Incidents';
import { IncidentsRepository } from '@domain/repositories/IncidentsRepository';
export declare class SequelizeIncidentsRepository implements IncidentsRepository {
    create(incident: Incidents): Promise<Incidents>;
    findAll(): Promise<Incidents[]>;
    findOne(id: string): Promise<Incidents | null>;
    update(id: string, incident: Partial<Incidents>): Promise<Incidents | null>;
    remove(id: string): Promise<boolean>;
    findByBikeId(bikeId: string): Promise<Incidents[]>;
}
