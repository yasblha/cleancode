import { MaintenanceServicesRepository } from '@domain/repositories/MaintenanceServicesRepository';
import { MaintenanceServices } from '@domain/entities/MaintainanceServices';
export default class FindMaintenanceServicesByBikeIdUseCase {
    private readonly maintenanceServicesRepository;
    constructor(maintenanceServicesRepository: MaintenanceServicesRepository);
    execute(bikeId: string): Promise<MaintenanceServices[]>;
}
