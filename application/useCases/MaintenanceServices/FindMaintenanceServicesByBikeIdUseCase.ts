import { MaintenanceRepository } from '@domain/repositories/MaintenanceRepository';
import { Maintenance } from '@domain/entities/Maintenance';

export default class FindMaintenanceServicesByBikeIdUseCase {
    constructor(private readonly maintenanceServicesRepository: MaintenanceRepository) {}

    async execute(bikeId: string): Promise<Maintenance[]> {
        return this.maintenanceServicesRepository.findByBikeId(bikeId);
    }
}