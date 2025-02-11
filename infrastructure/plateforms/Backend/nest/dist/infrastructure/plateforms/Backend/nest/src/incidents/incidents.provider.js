"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchByBikeUseCaseProvider = exports.FindAllIncidentUseCaseProvider = exports.FindOneIncidentUseCaseProvider = exports.UpdateIncidentUseCaseProvider = exports.RemoveIncidentUseCaseProvider = exports.CreateIncidentUseCaseProvider = void 0;
const CreateIncidentUseCase_1 = require("../../../../../../application/useCases/incidents/CreateIncidentUseCase");
const RemoveIncidentUseCase_1 = require("../../../../../../application/useCases/incidents/RemoveIncidentUseCase");
const UpdateIncidentUseCase_1 = require("../../../../../../application/useCases/incidents/UpdateIncidentUseCase");
const FindOneIncidentUseCase_1 = require("../../../../../../application/useCases/incidents/FindOneIncidentUseCase");
const FindAllIncidentUseCase_1 = require("../../../../../../application/useCases/incidents/FindAllIncidentUseCase");
const SearchByBikeUseCase_1 = require("../../../../../../application/useCases/incidents/SearchByBikeUseCase");
const IncidentsRepository_1 = require("../../../../../sequelize/repositories/IncidentsRepository");
exports.CreateIncidentUseCaseProvider = {
    provide: CreateIncidentUseCase_1.default,
    useFactory: (incidentRepository) => new CreateIncidentUseCase_1.default(incidentRepository),
    inject: [IncidentsRepository_1.SequelizeIncidentsRepository],
};
exports.RemoveIncidentUseCaseProvider = {
    provide: RemoveIncidentUseCase_1.default,
    useFactory: (incidentRepository) => new RemoveIncidentUseCase_1.default(incidentRepository),
    inject: [IncidentsRepository_1.SequelizeIncidentsRepository],
};
exports.UpdateIncidentUseCaseProvider = {
    provide: UpdateIncidentUseCase_1.default,
    useFactory: (incidentRepository) => new UpdateIncidentUseCase_1.default(incidentRepository),
    inject: [IncidentsRepository_1.SequelizeIncidentsRepository],
};
exports.FindOneIncidentUseCaseProvider = {
    provide: FindOneIncidentUseCase_1.default,
    useFactory: (incidentRepository) => new FindOneIncidentUseCase_1.default(incidentRepository),
    inject: [IncidentsRepository_1.SequelizeIncidentsRepository],
};
exports.FindAllIncidentUseCaseProvider = {
    provide: FindAllIncidentUseCase_1.default,
    useFactory: (incidentRepository) => new FindAllIncidentUseCase_1.default(incidentRepository),
    inject: [IncidentsRepository_1.SequelizeIncidentsRepository],
};
exports.SearchByBikeUseCaseProvider = {
    provide: SearchByBikeUseCase_1.default,
    useFactory: (incidentRepository) => new SearchByBikeUseCase_1.default(incidentRepository),
    inject: [IncidentsRepository_1.SequelizeIncidentsRepository],
};
exports.default = [
    exports.CreateIncidentUseCaseProvider,
    exports.RemoveIncidentUseCaseProvider,
    exports.UpdateIncidentUseCaseProvider,
    exports.FindOneIncidentUseCaseProvider,
    exports.FindAllIncidentUseCaseProvider,
    exports.SearchByBikeUseCaseProvider,
];
//# sourceMappingURL=incidents.provider.js.map