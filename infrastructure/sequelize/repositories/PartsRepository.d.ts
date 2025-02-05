import { Parts } from '@domain/entities/Parts';
import { PartsRepository } from '@domain/repositories/PartsRepository';
export declare class SequelizePartsRepository implements PartsRepository {
    create(part: Parts): Promise<Parts>;
    findAll(): Promise<Parts[]>;
    findOne(id: string): Promise<Parts | null>;
    update(id: string, part: Partial<Parts>): Promise<Parts | null>;
    remove(id: string): Promise<boolean>;
    findLowStockParts(): Promise<Parts[]>;
}
