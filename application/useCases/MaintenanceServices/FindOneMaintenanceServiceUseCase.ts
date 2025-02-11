import { MaintenanceRepository } from '@domain/repositories/MaintenanceRepository';
import { Maintenance } from '@domain/entities/Maintenance';

export default class FindOneMaintenanceServiceUseCase {
    constructor(private readonly maintenanceServicesRepository: MaintenanceRepository) {}

    async execute(id: string): Promise<Maintenance | null> {
        return this.maintenanceServicesRepository.findOne(id);
    }
}
