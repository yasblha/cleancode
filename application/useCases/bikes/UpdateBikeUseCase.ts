import SequelizeBikeRepository from "../../../infrastructure/database/sequelize/repositories/Bike";
import Bike from "../../../domain/entities/Bike";
import VinIdentifier from "../../../domain/value-objects/VinIdentifier";

export default class FindAllBikeUseCase {
    
    public constructor(
        private readonly bikeRepository: SequelizeBikeRepository,
    ) {}

    public async execute(vin: VinIdentifier, bike: Partial<Bike>): Promise<Bike | null> {

        // @TODO: Add validation logic here

        return this.bikeRepository.update(vin, bike);
    }
}