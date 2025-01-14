import SequelizeBikeRepository from "../../../infrastructure/database/sequelize/repositories/Bike";
import Bike from "../../../domain/entities/Bike";
import VinIdentifier from "../../../domain/value-objects/VinIdentifier";

export default class FindOneBikeUseCase {
    
    public constructor(
        private readonly bikeRepository: SequelizeBikeRepository,
    ) {}

    public async execute(vin: VinIdentifier): Promise<Bike | null> {
        return this.bikeRepository.findOne(vin);
    }
}