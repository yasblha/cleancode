import { MaintenanceServicesRepository } from '@domain/repositories/MaintenanceServicesRepository';
import { MaintenanceServices } from '@domain/entities/MaintainanceServices';
export default class CreateMaintenanceServiceUseCase {
    private readonly maintenanceServicesRepository;
    constructor(maintenanceServicesRepository: MaintenanceServicesRepository);
    execute(service: MaintenanceServices): Promise<MaintenanceServices>;
}
