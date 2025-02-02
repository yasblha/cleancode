import { MaintenanceServicesRepository } from '@domain/repositories/MaintenanceServicesRepository';
import { MaintenanceServices } from '@domain/entities/MaintainanceServices';


export default class CreateMaintenanceServiceUseCase {
    constructor(private readonly maintenanceServicesRepository: MaintenanceServicesRepository) {}

    async execute(service: MaintenanceServices): Promise<MaintenanceServices> {
        return this.maintenanceServicesRepository.create(service);
    }
}