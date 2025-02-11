import { Bikes } from '@domain/entities/Bikes';
import { BikesRepository } from '@domain/repositories/BikesRepository';
import VinIdentifier from '@domain/value-objects/Vinidentifier';
export declare class SequelizeBikesRepository implements BikesRepository {
    create(bike: Bikes): Promise<Bikes>;
    findAll(): Promise<Bikes[]>;
    findOne(vin: VinIdentifier): Promise<Bikes | null>;
    update(vin: VinIdentifier, partialBike: Partial<Bikes>): Promise<Bikes | null>;
    remove(vin: VinIdentifier): Promise<boolean>;
}
