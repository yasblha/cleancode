import { Bikes } from '@domain/entities/Bikes';
import { BikesRepository } from '@domain/repositories/BikesRepository';
export declare class SequelizeBikesRepository implements BikesRepository {
    create(bike: Bikes): Promise<Bikes>;
    findAll(): Promise<Bikes[]>;
    findOne(id: string): Promise<Bikes | null>;
    update(id: string, bike: Partial<Bikes>): Promise<Bikes | null>;
    remove(id: string): Promise<boolean>;
}
