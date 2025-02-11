import { BikesRepository } from "@domain/repositories/BikesRepository";
import { Bikes } from "@domain/entities/Bikes";
export default class FindOneBikeUseCase {
    private readonly bikeRepository;
    constructor(bikeRepository: BikesRepository);
    execute(vinInput: unknown): Promise<Bikes>;
}
