// infrastructure/sequelize/repositories/BikesRepository.ts
import BikeModel from '../models/BikeModel';
import { Bikes } from '@domain/entities/Bikes';
import { BikesRepository } from '@domain/repositories/BikesRepository';

export class SequelizeBikesRepository implements BikesRepository {
    async create(bike: Bikes): Promise<Bikes> {
        // @ts-ignore
        const newBike = await BikeModel.create(bike);
        return newBike.toJSON() as Bikes;
    }

    async findAll(): Promise<Bikes[]> {
        const bikes = await BikeModel.findAll();
        return bikes.map(bike => bike.toJSON() as Bikes);
    }

    async findOne(id: string): Promise<Bikes | null> {
        const bike = await BikeModel.findByPk(id);
        return bike ? bike.toJSON() as Bikes : null;
    }

    async update(id: string, bike: Partial<Bikes>): Promise<Bikes | null> {
        const [affectedCount] = await BikeModel.update(bike, { where: { id } });
        if (affectedCount > 0) {
            const updatedBike = await BikeModel.findByPk(id);
            return updatedBike ? updatedBike.toJSON() as Bikes : null;
        }
        return null;
    }

    async remove(id: string): Promise<boolean> {
        const affectedCount = await BikeModel.destroy({ where: { id } });
        return affectedCount > 0;
    }
}