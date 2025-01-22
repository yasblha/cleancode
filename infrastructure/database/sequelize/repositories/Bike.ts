import { Op } from "sequelize";

import BikesRepository from "../../../../application/repositories/BikesRepository";
import BikeModel from "../models/Bike";
import BikeNotFoundError from "../../../../domain/errors/bikes/BikeNotFoundError";

import VinIdentifier from "../../../../domain/value-objects/VinIdentifier";
import Bike from "../../../../domain/entities/Bike";

export default class SequelizeBikeRepository implements BikesRepository {

    async create(bike: Bike): Promise<Bike> {
        const newBike = await BikeModel.create(bike);

        return Bike.fromSequelizeModel(newBike);
    }

    async update(vin: VinIdentifier, bike: Partial<Bike>): Promise<Bike | null> {
        const bikeToUpdate = await BikeModel.findByPk(vin.value);

        if(!bikeToUpdate) throw new BikeNotFoundError();

        await bikeToUpdate.update(bike);

        return Bike.fromSequelizeModel(bikeToUpdate);
    }

    async remove(vin: VinIdentifier): Promise<void> {
        const bike = await BikeModel.findByPk(vin.value);

        if(!bike) throw new BikeNotFoundError();

        await bike.destroy();
    }

    async findOne(vin: VinIdentifier): Promise<Bike | null> {
        const bike = await BikeModel.findByPk(vin.value);

        if(!bike) throw new BikeNotFoundError();

        return Bike.fromSequelizeModel(bike);
    }

    async findAll(): Promise<Bike[]> {
        const bikes = await BikeModel.findAll();

        return bikes.map((bike) => Bike.fromSequelizeModel(bike));
    }

    async searchByVin(vin: VinIdentifier): Promise<Bike[]> {
        /*const bikes = await BikeModel.findAll({
            where: {
                vin: {
                    [Op.like]: `%${vin.value}%`
                }
            }
        });*/
        const bikes: any[] = []; // @TODO: Implement search by vin

        return bikes.map((bike) => Bike.fromSequelizeModel(bike));
    }

    async searchByModel(model: string): Promise<Bike[]> {
        const bikes = await BikeModel.findAll({
            where: {
                model: {
                    [Op.like]: `%${model}%`
                }
            }
        });

        return bikes.map((bike) => Bike.fromSequelizeModel(bike));
    }

}