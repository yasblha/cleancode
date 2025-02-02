import { Bikes } from '../entities/Bikes';

export interface BikesRepository {
    create(bike: Bikes): Promise<Bikes>;
    findAll(): Promise<Bikes[]>;
    findOne(id: string): Promise<Bikes | null>;
    update(id: string, bike: Partial<Bikes>): Promise<Bikes | null>;
    remove(id: string): Promise<boolean>;
}