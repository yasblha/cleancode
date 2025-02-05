import { MaintenanceServices } from '@domain/entities/MaintainanceServices';
import { MaintenanceServicesRepository } from '@domain/repositories/MaintenanceServicesRepository';
export declare class SequelizeMaintenanceServicesRepository implements MaintenanceServicesRepository {
    create(service: MaintenanceServices): Promise<MaintenanceServices>;
    findAll(): Promise<MaintenanceServices[]>;
    findOne(id: string): Promise<MaintenanceServices | null>;
    update(id: string, service: Partial<MaintenanceServices>): Promise<MaintenanceServices | null>;
    remove(id: string): Promise<boolean>;
    findByBikeId(bikeId: string): Promise<MaintenanceServices[]>;
    findByTechnicianId(technicianId: string): Promise<MaintenanceServices[]>;
}
