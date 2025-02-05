import BikeModel from '../models/BikeModel';
import { Bikes } from '@domain/entities/Bikes';
import { BikesRepository } from '@domain/repositories/BikesRepository';
import VinIdentifier from "@domain/value-objects/Vinidentifier";

export class SequelizeBikesRepository implements BikesRepository {
    async create(bike: Bikes): Promise<Bikes> {
        const newBike = await BikeModel.create(
            {Bikes: bike, vin: bike.vin.toString()}
        );
        return newBike.toJSON() as Bikes;
    }

    async findAll(): Promise<Bikes[]> {
        const bikes = await BikeModel.findAll();
        return bikes.map(bike => bike.toJSON() as Bikes);
    }

    async findOne(vin: VinIdentifier): Promise<Bikes | null> {
        const bike = await BikeModel.findOne({ where: { vin } });
        return bike ? bike.toJSON() as Bikes : null;
    }

    async update(vin: VinIdentifier, bike: Partial<Bikes>): Promise<Bikes | null> {
        const [affectedCount] = await BikeModel.update(bike, { where: { vin } });
        if (affectedCount > 0) {
            return this.findOne(vin);
        }
        return null
    }

    async remove(vin: VinIdentifier): Promise<boolean> {
        const affectedCount = await BikeModel.destroy({ where: { vin } });
        return affectedCount > 0;
    }
}