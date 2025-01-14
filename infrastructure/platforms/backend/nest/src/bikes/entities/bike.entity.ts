import { Bikes} from "../../../../../../../domain/entities/Bikes";

export class Bike {
    static toDomain(prismaBike: PrismaBike): Bikes {
        return new Bikes(
            prismaBike.id,
            prismaBike.name,
            prismaBike.brand,
            prismaBike.model,
            prismaBike.price,
            prismaBike.isActive,
            prismaBike.createdAt,
            prismaBike.updatedAt,
        );
    }

    static toPrisma(domainBike: Bikes): PrismaBike {
        return {
            id: domainBike.id,
            name: domainBike.name,
            brand: domainBike.brand,
            model: domainBike.model,
            price: domainBike.price,
            isActive: domainBike.isActive,
            createdAt: domainBike.createdAt,
            updatedAt: domainBike.updatedAt,
        };
    }
}