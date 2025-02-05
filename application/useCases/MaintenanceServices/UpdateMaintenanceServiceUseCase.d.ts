import { MaintenanceServicesRepository } from '@domain/repositories/MaintenanceServicesRepository';
import { MaintenanceServices } from '@domain/entities/MaintainanceServices';
export default class UpdateMaintenanceServiceUseCase {
    private readonly maintenanceServicesRepository;
    constructor(maintenanceServicesRepository: MaintenanceServicesRepository);
    execute(id: string, service: Partial<MaintenanceServices>): Promise<MaintenanceServices | null>;
}
