import { Bikes } from "@app/domain/entities/Bikes";
import { BikesRepository } from "@domain/repositories/BikesRepository";
import {SequelizeBikesRepository} from "@infrastructure/sequelize/repositories/BikesRepository";

export default class CreateBikeUseCase {

    public constructor(
       private readonly bikeRepository: BikesRepository,
    ) {}

    public async execute(bike: Bikes): Promise<Bikes> {
        return this.bikeRepository.create(bike);
    }
}