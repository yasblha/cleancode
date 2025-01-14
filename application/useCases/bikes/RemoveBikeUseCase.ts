import SequelizeBikeRepository from "../../../infrastructure/database/sequelize/repositories/Bike";
import VinIdentifier from "../../../domain/value-objects/VinIdentifier";

export default class RemoveBikeUseCase {
    
    public constructor(
        private readonly bikeRepository: SequelizeBikeRepository,
    ) {}

    public async execute(vin: VinIdentifier): Promise<void> {

        // @TODO: Add validation logic here

        this.bikeRepository.remove(vin);
    }
}