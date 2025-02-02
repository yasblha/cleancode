import { MaintenanceServicesRepository } from '@domain/repositories/MaintenanceServicesRepository';
import { MaintenanceServices } from '@domain/entities/MaintainanceServices';

export default class FindAllMaintenanceServicesUseCase {
    constructor(private readonly maintenanceServicesRepository: MaintenanceServicesRepository) {}

    async execute(): Promise<MaintenanceServices[]> {
        return this.maintenanceServicesRepository.findAll();
    }
}