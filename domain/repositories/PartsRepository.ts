import { Parts } from '../entities/Parts';

export interface PartsRepository {
    create(part: Parts): Promise<Parts>;
    findAll(): Promise<Parts[]>;
    findOne(id: string): Promise<Parts | null>;
    update(id: string, part: Partial<Parts>): Promise<Parts | null>;
    remove(id: string): Promise<boolean>;
    findLowStockParts(): Promise<Parts[]>;
    //findByBikeId(bikeId: string): Promise<Parts[]>;
    //findByPartId(partId: string): Promise<Parts | null>;
    //findByPartName(partName: string): Promise<Parts | null>;
    //findByPartCategory(partCategory: string): Promise<Parts[]>;
    //findByPartBrand(partBrand: string): Promise<Parts[]>;
}