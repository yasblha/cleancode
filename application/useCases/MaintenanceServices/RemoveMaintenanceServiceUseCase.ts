import { MaintenanceServicesRepository } from '@domain/repositories/MaintenanceServicesRepository';

export default class RemoveMaintenanceServiceUseCase {
    constructor(private readonly maintenanceServicesRepository: MaintenanceServicesRepository) {}

    async execute(id: string): Promise<boolean> {
        return this.maintenanceServicesRepository.remove(id);
    }
}