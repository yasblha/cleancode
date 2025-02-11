import { Bikes } from '../entities/Bikes';
import VinIdentifier from "@domain/value-objects/Vinidentifier";
export interface BikesRepository {
    create(bike: Bikes): Promise<Bikes>;
    findAll(): Promise<Bikes[]>;
    findOne(vin: VinIdentifier): Promise<Bikes | null>;
    update(vin: VinIdentifier, bike: Partial<Bikes>): Promise<Bikes | null>;
    remove(vin: VinIdentifier): Promise<boolean>;
}
