import SequelizeBikeRepository from "../../../infrastructure/database/sequelize/repositories/Bike";
import Bike from "../../../domain/entities/Bike";

export default class SearchByModelUseCase {
    
    public constructor(
        private readonly bikeRepository: SequelizeBikeRepository,
    ) {}

    public async execute(model: string): Promise<Bike[]> {

        // @TODO: Add validation logic here

        return this.bikeRepository.searchByModel(model);
    }
}