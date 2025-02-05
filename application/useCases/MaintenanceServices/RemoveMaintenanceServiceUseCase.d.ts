import { MaintenanceServicesRepository } from '@domain/repositories/MaintenanceServicesRepository';
export default class RemoveMaintenanceServiceUseCase {
    private readonly maintenanceServicesRepository;
    constructor(maintenanceServicesRepository: MaintenanceServicesRepository);
    execute(id: string): Promise<boolean>;
}
