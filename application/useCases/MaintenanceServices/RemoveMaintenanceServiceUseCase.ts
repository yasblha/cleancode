import { MaintenanceRepository } from '@domain/repositories/MaintenanceRepository';

export default class RemoveMaintenanceServiceUseCase {
    constructor(private readonly maintenanceServicesRepository: MaintenanceRepository) {}

    async execute(id: string): Promise<boolean> {
        return this.maintenanceServicesRepository.remove(id);
    }
}