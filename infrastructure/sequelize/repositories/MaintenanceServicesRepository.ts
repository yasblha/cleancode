import { MaintenanceServices } from '@domain/entities/MaintainanceServices';
import { MaintenanceServicesRepository } from '@domain/repositories/MaintenanceServicesRepository';
import MaintenanceServiceModel from '../models/MaintenanceServiceModel';

export class SequelizeMaintenanceServicesRepository implements MaintenanceServicesRepository {
    async create(service: MaintenanceServices): Promise<MaintenanceServices> {
        // @ts-ignore
        const newService = await MaintenanceServiceModel.create(service);
        return newService.toJSON() as MaintenanceServices;
    }

    async findAll(): Promise<MaintenanceServices[]> {
        const services = await MaintenanceServiceModel.findAll();
        return services.map(service => service.toJSON() as MaintenanceServices);
    }

    async findOne(id: string): Promise<MaintenanceServices | null> {
        const service = await MaintenanceServiceModel.findByPk(id);
        return service ? service.toJSON() as MaintenanceServices : null;
    }

    async update(id: string, service: Partial<MaintenanceServices>): Promise<MaintenanceServices | null> {
        const [affectedCount] = await MaintenanceServiceModel.update(service, { where: { id } });
        if (affectedCount > 0) {
            const updatedService = await MaintenanceServiceModel.findByPk(id);
            return updatedService ? updatedService.toJSON() as MaintenanceServices : null;
        }
        return null;
    }

    async remove(id: string): Promise<boolean> {
        const affectedCount = await MaintenanceServiceModel.destroy({ where: { id } });
        return affectedCount > 0;
    }

    async findByBikeId(bikeId: string): Promise<MaintenanceServices[]> {
        const services = await MaintenanceServiceModel.findAll({ where: { bikeId } });
        return services.map(service => service.toJSON() as MaintenanceServices);
    }

    async findByTechnicianId(technicianId: string): Promise<MaintenanceServices[]> {
        const services = await MaintenanceServiceModel.findAll({ where: { technicianId } });
        return services.map(service => service.toJSON() as MaintenanceServices);
    }
}