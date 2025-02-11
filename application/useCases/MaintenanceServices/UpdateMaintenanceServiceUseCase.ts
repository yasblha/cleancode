import { MaintenanceRepository } from '@domain/repositories/MaintenanceRepository';
import { Maintenance } from '@domain/entities/Maintenance';

export default class UpdateMaintenanceServiceUseCase {
    constructor(private readonly maintenanceServicesRepository: MaintenanceRepository) {}

    async execute(id: string, service: Partial<Maintenance>): Promise<Maintenance | null> {
        return this.maintenanceServicesRepository.update(id, service);
    }
}