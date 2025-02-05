import { Bikes } from "@domain/entities/Bikes";
import { BikesRepository } from "@domain/repositories/BikesRepository";
export default class CreateBikeUseCase {
    private readonly bikeRepository;
    constructor(bikeRepository: BikesRepository);
    execute(bike: Bikes): Promise<Bikes>;
}
