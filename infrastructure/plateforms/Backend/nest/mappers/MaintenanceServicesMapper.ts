import { MaintenanceService as PrismaMaintenanceService } from '@prisma/client';
import { MaintenanceServices } from '../../domain/entities/MaintenanceServices';

export class MaintenanceServicesMapper {
    static toDomain(prismaService: PrismaMaintenanceService): MaintenanceServices {
        return new MaintenanceServices(
            prismaService.id,
            prismaService.bikeId,
            prismaService.date,
            prismaService.description,
            prismaService.type,
            prismaService.isResolved,
            prismaService.cost,
            prismaService.partsUsed as { partId: string; quantity: number }[],
            prismaService.technicianId,
            prismaService.createdAt,
            prismaService.updatedAt,
        );
    }

    static toPrisma(domainService: MaintenanceServices): PrismaMaintenanceService {
        return {
            id: domainService.id,
            bikeId: domainService.bikeId,
            date: domainService.date,
            description: domainService.description,
            type: domainService.type,
            isResolved: domainService.isResolved,
            cost: domainService.cost,
            partsUsed: domainService.partsUsed,
            technicianId: domainService.technicianId,
            createdAt: domainService.createdAt,
            updatedAt: domainService.updatedAt,
        };
    }
}