import { MaintenanceServices } from '../../domain/entities/MaintenanceServices';
export class MaintenanceServicesMapper {
    static toDomain(prismaService) {
        return new MaintenanceServices(prismaService.id, prismaService.bikeId, prismaService.date, prismaService.description, prismaService.type, prismaService.isResolved, prismaService.cost, prismaService.partsUsed, prismaService.technicianId, prismaService.createdAt, prismaService.updatedAt);
    }
    static toPrisma(domainService) {
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
