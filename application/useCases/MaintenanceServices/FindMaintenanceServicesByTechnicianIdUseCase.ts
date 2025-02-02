import { MaintenanceServicesRepository } from '@domain/repositories/MaintenanceServicesRepository';
import { MaintenanceServices } from '@domain/entities/MaintainanceServices';

export default class FindMaintenanceServicesByTechnicianIdUseCase {
    constructor(private readonly maintenanceServicesRepository: MaintenanceServicesRepository) {}

    async execute(technicianId: string): Promise<MaintenanceServices[]> {
        return this.maintenanceServicesRepository.findByTechnicianId(technicianId);
    }
}