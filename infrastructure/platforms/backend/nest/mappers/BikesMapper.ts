import { Bike as PrismaBike } from '@prisma/client';
import { Bikes } from '../../../../../domain/entities/Bikes';

export class BikesMapper {
    static toDomain(prismaBike: PrismaBike): Bikes {
        return new Bikes(
            prismaBike.id,
            prismaBike.brand,
            prismaBike.model,
            prismaBike.mileage,
            prismaBike.registrationNumber,
            prismaBike.purchaseDate,
            prismaBike.warrantyExpirationDate,
            prismaBike.ownerId,
            prismaBike.isActive,
            prismaBike.isInMaintenance,
            prismaBike.isDecommissioned,
            prismaBike.nextMaintenanceMileage,
            prismaBike.nextMaintenanceDate,
            prismaBike.createdAt,
            prismaBike.updatedAt,
        );
    }

    static toPrisma(domainBike: Bikes): PrismaBike {
        return {
            id: domainBike.id,
            brand: domainBike.brand,
            model: domainBike.model,
            mileage: domainBike.mileage,
            registrationNumber: domainBike.registrationNumber,
            purchaseDate: domainBike.purchaseDate,
            warrantyExpirationDate: domainBike.warrantyExpirationDate,
            ownerId: domainBike.ownerId,
            isActive: domainBike.isActive,
            isInMaintenance: domainBike.isInMaintenance,
            isDecommissioned: domainBike.isDecommissioned,
            nextMaintenanceMileage: domainBike.nextMaintenanceMileage,
            nextMaintenanceDate: domainBike.nextMaintenanceDate,
            createdAt: domainBike.createdAt,
            updatedAt: domainBike.updatedAt,
        };
    }
}