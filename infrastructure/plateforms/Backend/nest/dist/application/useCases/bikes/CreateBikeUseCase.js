"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BikesErrors_1 = require("../../../domain/errors/BikesErrors");
class CreateBikeUseCase {
    constructor(bikeRepository) {
        this.bikeRepository = bikeRepository;
    }
    async execute(bike) {
        if (!bike.brand || !bike.brand.trim()) {
            throw new BikesErrors_1.MissingBrandError();
        }
        if (!bike.model || !bike.model.trim()) {
            throw new BikesErrors_1.MissingBrandError();
        }
        if (bike.mileage < 0) {
            throw new BikesErrors_1.NegativeMileageError(bike.mileage);
        }
        const regEx = /^[A-Z0-9-]+$/;
        if (!regEx.test(bike.registrationNumber)) {
            throw new BikesErrors_1.RegistrationNumberFormatError(bike.registrationNumber);
        }
        return this.bikeRepository.create(bike);
    }
}
exports.default = CreateBikeUseCase;
//# sourceMappingURL=CreateBikeUseCase.js.map