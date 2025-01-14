import { Parts } from '../../../../../domain/entities/Parts';
export class PartsMapper {
    static toDomain(prismaPart) {
        return new Parts(prismaPart.id, prismaPart.name, prismaPart.description, prismaPart.stockQuantity, prismaPart.minStockLevel, prismaPart.price, prismaPart.createdAt, prismaPart.updatedAt);
    }
    static toPrisma(domainPart) {
        return {
            id: domainPart.id,
            name: domainPart.name,
            description: domainPart.description,
            stockQuantity: domainPart.stockQuantity,
            minStockLevel: domainPart.minStockLevel,
            price: domainPart.price,
            createdAt: domainPart.createdAt,
            updatedAt: domainPart.updatedAt,
        };
    }
}
