import { MaintenanceServicesRepository } from '@domain/repositories/MaintenanceServicesRepository';
import { MaintenanceServices } from '@domain/entities/MaintainanceServices';

export default class UpdateMaintenanceServiceUseCase {
    constructor(private readonly maintenanceServicesRepository: MaintenanceServicesRepository) {}

    async execute(id: string, service: Partial<MaintenanceServices>): Promise<MaintenanceServices | null> {
        return this.maintenanceServicesRepository.update(id, service);
    }
}