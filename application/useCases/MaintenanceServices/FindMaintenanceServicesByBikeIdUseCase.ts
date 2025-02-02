import { MaintenanceServicesRepository } from '@domain/repositories/MaintenanceServicesRepository';
import { MaintenanceServices } from '@domain/entities/MaintainanceServices';

export default class FindMaintenanceServicesByBikeIdUseCase {
    constructor(private readonly maintenanceServicesRepository: MaintenanceServicesRepository) {}

    async execute(bikeId: string): Promise<MaintenanceServices[]> {
        return this.maintenanceServicesRepository.findByBikeId(bikeId);
    }
}