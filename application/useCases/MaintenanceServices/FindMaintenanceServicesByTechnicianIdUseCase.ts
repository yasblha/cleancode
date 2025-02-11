import { MaintenanceRepository } from '@domain/repositories/MaintenanceRepository';
import { Maintenance } from '@domain/entities/Maintenance';

export default class FindMaintenanceServicesByTechnicianIdUseCase {
    constructor(private readonly maintenanceServicesRepository: MaintenanceRepository) {}

    async execute(technicianId: string): Promise<Maintenance[]> {
        return this.maintenanceServicesRepository.findByTechnicianId(technicianId);
    }
}