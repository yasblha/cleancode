import { MaintenanceRepository } from '@domain/repositories/MaintenanceRepository';
import { Maintenance } from '@domain/entities/Maintenance';

export default class FindAllMaintenanceServicesUseCase {
    constructor(private readonly maintenanceServicesRepository: MaintenanceRepository) {}

    async execute(): Promise<Maintenance[]> {
        return this.maintenanceServicesRepository.findAll();
    }
}