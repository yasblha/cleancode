import { Maintenance } from '../entities/Maintenance';

export interface MaintenanceRepository {
    create(service: Omit<Maintenance, "id">): Promise<Maintenance>;
    findAll(): Promise<Maintenance[]>;
    findOne(id: string): Promise<Maintenance | null>;
    update(id: string, service: Partial<Maintenance>): Promise<Maintenance | null>;
    remove(id: string): Promise<boolean>;
    findByBikeId(bikeId: string): Promise<Maintenance[]>;
    findByTechnicianId(technicianId: string): Promise<Maintenance[]>;
}