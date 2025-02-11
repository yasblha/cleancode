import { Parts } from "@domain/entities/Parts";

export interface PartsRepository {
    create(part: Omit<Parts, "id"> & { reference: string }): Promise<Parts>;
    findAll(): Promise<Parts[]>;
    findOne(id: string): Promise<Parts | null>;
    update(id: string, part: Partial<Parts>): Promise<Parts | null>;
    remove(id: string): Promise<boolean>;
    findLowStockParts(): Promise<Parts[]>;
    searchByReference(reference: string): Promise<Parts[]>;
}
