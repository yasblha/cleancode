import Bike from "../../domain/entities/Bike";
import VinIdentifier from "../../domain/value-objects/VinIdentifier";

export default interface BikesRepository {
    create(bike: Bike): Promise<Bike>;
    update(vin: VinIdentifier, bike: Partial<Bike>): Promise<Bike | null>;
    remove(vin: VinIdentifier): Promise<void>;
    findOne(vin: VinIdentifier): Promise<Bike | null>;
    findAll(): Promise<Bike[]>;
    searchByVin(vin: VinIdentifier): Promise<Bike[]>;
    searchByModel(model: string): Promise<Bike[]>;
}