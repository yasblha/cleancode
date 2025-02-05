import { MaintenanceServicesRepository } from '@domain/repositories/MaintenanceServicesRepository';
import { MaintenanceServices } from '@domain/entities/MaintainanceServices';
export default class FindMaintenanceServicesByTechnicianIdUseCase {
    private readonly maintenanceServicesRepository;
    constructor(maintenanceServicesRepository: MaintenanceServicesRepository);
    execute(technicianId: string): Promise<MaintenanceServices[]>;
}
