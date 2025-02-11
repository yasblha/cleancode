import MaintenanceServiceModel from '@infrastructure/sequelize/models/MaintenanceModel';
import { Maintenance } from '@domain/entities/Maintenance';
import { MaintenanceRepository } from '@domain/repositories/MaintenanceRepository';
import { Errors } from '@domain/errors/errors';

export class SequelizeMaintenanceRepository implements MaintenanceRepository {
    async create(service: Omit<Maintenance, "id">): Promise<Maintenance> {
        const newMaintenance = await MaintenanceServiceModel.create({
            bikeId: service.bikeId,
            date: service.date,
            description: service.description,
            type: service.type,
            isResolved: service.isResolved,
            price: service.price,
            partsUsed: service.partsUsed,
            technicianId: service.technicianId,
        });

        const rawData = newMaintenance.toJSON() as Maintenance;
        return rawData;
    }

    async findAll(): Promise<Maintenance[]> {
        const maintenanceRecords = await MaintenanceServiceModel.findAll();
        return maintenanceRecords.map((m) => {
            const rawData = m.toJSON() as Maintenance;
            return rawData;
        });
    }

    async findOne(id: string): Promise<Maintenance | null> {
        const maintenanceId = parseInt(id, 10);
        if (isNaN(maintenanceId)) {
            console.error(Errors.INVALID_ID);
            return null;
        }

        const maintenance = await MaintenanceServiceModel.findOne({
            where: { id: maintenanceId },
        });

        if (!maintenance) {
            console.log(Errors.MAINTENANCE_NOT_FOUND);
            return null;
        }

        const rawData = maintenance.toJSON() as Maintenance;
        return rawData;
    }

    async update(id: string, service: Partial<Maintenance>): Promise<Maintenance | null> {
        const maintenanceId = parseInt(id, 10);
        if (isNaN(maintenanceId)) {
            console.error(Errors.INVALID_ID);
            return null;
        }

        const [affectedCount] = await MaintenanceServiceModel.update(service, {
            where: { id: maintenanceId },
        });

        if (affectedCount > 0) {
            return this.findOne(id);
        }
        return null;
    }

    async remove(id: string): Promise<boolean> {
        const maintenanceId = parseInt(id, 10);
        if (isNaN(maintenanceId)) {
            console.error(Errors.INVALID_ID);
            return false;
        }

        const affectedCount = await MaintenanceServiceModel.destroy({
            where: { id: maintenanceId },
        });
        return affectedCount > 0;
    }

    async findByBikeId(bikeId: string): Promise<Maintenance[]> {
        const bikeIdNumber = parseInt(bikeId, 10);
        if (isNaN(bikeIdNumber)) {
            console.error(Errors.INVALID_BIKE_ID);
            return [];
        }

        const maintenanceRecords = await MaintenanceServiceModel.findAll({
            where: { bikeId: bikeIdNumber },
        });

        return maintenanceRecords.map((m) => {
            const rawData = m.toJSON() as Maintenance;
            return rawData;
        });
    }

    async findByTechnicianId(technicianId: string): Promise<Maintenance[]> {
        const technicianIdNumber = parseInt(technicianId, 10);
        if (isNaN(technicianIdNumber)) {
            console.error(Errors.INVALID_TECHNICIAN_ID);
            return [];
        }

        const maintenanceRecords = await MaintenanceServiceModel.findAll({
            where: { technicianId: technicianIdNumber },
        });

        return maintenanceRecords.map((m) => {
            const rawData = m.toJSON() as Maintenance;
            return rawData;
        });
    }
}