import { Bikes } from "@domain/entities/Bikes";
import { BikesRepository } from "@domain/repositories/BikesRepository";
import  { InvalidVinError, BikeAlreadyExistsError, MissingBrandError, NegativeMileageError, RegistrationNumberFormatError,} from "@domain/errors/BikesErrors";
import VinIdentifier from "@domain/value-objects/Vinidentifier";

export default class CreateBikeUseCase {
    constructor(private readonly bikeRepository: BikesRepository) {}

    public async execute(bike: Bikes): Promise<Bikes> {


        if (!bike.brand || !bike.brand.trim()) {
            throw new MissingBrandError();
        }

        if (!bike.model || !bike.model.trim()) {
            throw new MissingBrandError();
        }

        if (bike.mileage < 0) {
            throw new NegativeMileageError(bike.mileage);
        }

        //format du numéro d’immatriculation (registrationNumber)
        const regEx = /^[A-Z0-9-]+$/;
        if (!regEx.test(bike.registrationNumber)) {
            throw new RegistrationNumberFormatError(bike.registrationNumber);
        }

        // Vérif si déjà existant
        /*const existingBike = await this.bikeRepository.findOne(new VinIdentifier(bike.vin.value));
        if (existingBike) {
            throw new BikeAlreadyExistsError(bike.vin.value);
        }*/

        return this.bikeRepository.create(bike);
    }
}
