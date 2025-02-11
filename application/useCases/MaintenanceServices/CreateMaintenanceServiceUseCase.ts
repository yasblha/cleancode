import { MaintenanceRepository } from '@domain/repositories/MaintenanceRepository';
import { Maintenance } from '@domain/entities/Maintenance';

export default class CreateMaintenanceServiceUseCase {
    constructor(
      private readonly maintenanceServicesRepository: MaintenanceRepository
    ) {}

    async execute(serviceData: Maintenance): Promise<Maintenance> {
        return this.maintenanceServicesRepository.create(serviceData);
    }
}
