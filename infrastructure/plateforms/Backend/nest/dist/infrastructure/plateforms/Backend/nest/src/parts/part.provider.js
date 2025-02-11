"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAlertUseCaseProvider = exports.SearchByReferenceUseCaseProvider = exports.FindAllPartUseCaseProvider = exports.FindOnePartUseCaseProvider = exports.UpdatePartUseCaseProvider = exports.RemovePartUseCaseProvider = exports.CreatePartUseCaseProvider = void 0;
const CreatePartUseCase_1 = require("../../../../../../application/useCases/parts/CreatePartUseCase");
const RemovePartUseCase_1 = require("../../../../../../application/useCases/parts/RemovePartUseCase");
const UpdatePartUseCase_1 = require("../../../../../../application/useCases/parts/UpdatePartUseCase");
const FindOnePartUseCase_1 = require("../../../../../../application/useCases/parts/FindOnePartUseCase");
const FindAllPartUseCase_1 = require("../../../../../../application/useCases/parts/FindAllPartUseCase");
const SearchByReferenceUseCase_1 = require("../../../../../../application/useCases/Parts/SearchByReferenceUseCase");
const CreateAlertUseCase_1 = require("../../../../../../application/useCases/alerts/CreateAlertUseCase");
const PartsRepository_1 = require("../../../../../sequelize/repositories/PartsRepository");
const Alert_1 = require("../../../../../mongo/repositories/Alert");
exports.CreatePartUseCaseProvider = {
    provide: CreatePartUseCase_1.default,
    useFactory: (PartRepository) => new CreatePartUseCase_1.default(PartRepository),
    inject: [PartsRepository_1.SequelizePartsRepository],
};
exports.RemovePartUseCaseProvider = {
    provide: RemovePartUseCase_1.default,
    useFactory: (PartRepository) => new RemovePartUseCase_1.default(PartRepository),
    inject: [PartsRepository_1.SequelizePartsRepository],
};
exports.UpdatePartUseCaseProvider = {
    provide: UpdatePartUseCase_1.default,
    useFactory: (PartRepository, CreateAlertUseCase) => new UpdatePartUseCase_1.default(PartRepository, CreateAlertUseCase),
    inject: [PartsRepository_1.SequelizePartsRepository, CreateAlertUseCase_1.default],
};
exports.FindOnePartUseCaseProvider = {
    provide: FindOnePartUseCase_1.default,
    useFactory: (PartRepository) => new FindOnePartUseCase_1.default(PartRepository),
    inject: [PartsRepository_1.SequelizePartsRepository],
};
exports.FindAllPartUseCaseProvider = {
    provide: FindAllPartUseCase_1.default,
    useFactory: (PartRepository) => new FindAllPartUseCase_1.default(PartRepository),
    inject: [PartsRepository_1.SequelizePartsRepository],
};
exports.SearchByReferenceUseCaseProvider = {
    provide: SearchByReferenceUseCase_1.default,
    useFactory: (PartRepository) => new SearchByReferenceUseCase_1.default(PartRepository),
    inject: [PartsRepository_1.SequelizePartsRepository],
};
exports.CreateAlertUseCaseProvider = {
    provide: CreateAlertUseCase_1.default,
    useFactory: (alertRepository) => new CreateAlertUseCase_1.default(alertRepository),
    inject: [Alert_1.default],
};
exports.default = [
    exports.CreatePartUseCaseProvider,
    exports.RemovePartUseCaseProvider,
    exports.UpdatePartUseCaseProvider,
    exports.FindOnePartUseCaseProvider,
    exports.FindAllPartUseCaseProvider,
    exports.SearchByReferenceUseCaseProvider,
    exports.CreateAlertUseCaseProvider,
    Alert_1.default,
];
//# sourceMappingURL=part.provider.js.map