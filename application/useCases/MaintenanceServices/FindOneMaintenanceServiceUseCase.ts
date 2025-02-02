import { MaintenanceServicesRepository } from '@domain/repositories/MaintenanceServicesRepository';
import { MaintenanceServices } from '@domain/entities/MaintainanceServices';

export default class FindOneMaintenanceServiceUseCase {
    constructor(private readonly maintenanceServicesRepository: MaintenanceServicesRepository) {}

    async execute(id: string): Promise<MaintenanceServices | null> {
        return this.maintenanceServicesRepository.findOne(id);
    }
}
