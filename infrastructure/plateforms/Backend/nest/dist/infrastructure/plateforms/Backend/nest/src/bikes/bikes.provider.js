"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllBikeUseCaseProvider = exports.FindOneBikeUseCaseProvider = exports.UpdateBikeUseCaseProvider = exports.RemoveBikeUseCaseProvider = exports.CreateBikeUseCaseProvider = void 0;
const CreateBikeUseCase_1 = require("../../../../../../application/useCases/bikes/CreateBikeUseCase");
const RemoveBikeUseCase_1 = require("../../../../../../application/useCases/bikes/RemoveBikeUseCase");
const UpdateBikeUseCase_1 = require("../../../../../../application/useCases/bikes/UpdateBikeUseCase");
const FindOneBikeUseCase_1 = require("../../../../../../application/useCases/bikes/FindOneBikeUseCase");
const FindAllBikeUseCase_1 = require("../../../../../../application/useCases/bikes/FindAllBikeUseCase");
const BikesRepository_1 = require("../../../../../sequelize/repositories/BikesRepository");
exports.CreateBikeUseCaseProvider = {
    provide: CreateBikeUseCase_1.default,
    useFactory: (bikeRepository) => new CreateBikeUseCase_1.default(bikeRepository),
    inject: [BikesRepository_1.SequelizeBikesRepository],
};
exports.RemoveBikeUseCaseProvider = {
    provide: RemoveBikeUseCase_1.default,
    useFactory: (bikeRepository) => new RemoveBikeUseCase_1.default(bikeRepository),
    inject: [BikesRepository_1.SequelizeBikesRepository],
};
exports.UpdateBikeUseCaseProvider = {
    provide: UpdateBikeUseCase_1.default,
    useFactory: (bikeRepository) => new UpdateBikeUseCase_1.default(bikeRepository),
    inject: [BikesRepository_1.SequelizeBikesRepository],
};
exports.FindOneBikeUseCaseProvider = {
    provide: FindOneBikeUseCase_1.default,
    useFactory: (bikeRepository) => new FindOneBikeUseCase_1.default(bikeRepository),
    inject: [BikesRepository_1.SequelizeBikesRepository],
};
exports.FindAllBikeUseCaseProvider = {
    provide: FindAllBikeUseCase_1.default,
    useFactory: (bikeRepository) => new FindAllBikeUseCase_1.default(bikeRepository),
    inject: [BikesRepository_1.SequelizeBikesRepository],
};
exports.default = [
    exports.CreateBikeUseCaseProvider,
    exports.RemoveBikeUseCaseProvider,
    exports.UpdateBikeUseCaseProvider,
    exports.FindOneBikeUseCaseProvider,
    exports.FindAllBikeUseCaseProvider,
];
//# sourceMappingURL=bikes.provider.js.map