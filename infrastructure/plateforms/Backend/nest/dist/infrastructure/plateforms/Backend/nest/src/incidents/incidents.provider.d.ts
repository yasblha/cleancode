import CreateIncidentUseCase from "@application/useCases/incidents/CreateIncidentUseCase";
import RemoveIncidentUseCase from "@application/useCases/incidents/RemoveIncidentUseCase";
import UpdateIncidentUseCase from "@application/useCases/incidents/UpdateIncidentUseCase";
import FindOneIncidentUseCase from "@application/useCases/incidents/FindOneIncidentUseCase";
import FindAllIncidentUseCase from "@application/useCases/incidents/FindAllIncidentUseCase";
import SearchByBikeUseCase from "@application/useCases/incidents/SearchByBikeUseCase";
import { SequelizeIncidentsRepository } from "@infrastructure/sequelize/repositories/IncidentsRepository";
export declare const CreateIncidentUseCaseProvider: {
    provide: typeof CreateIncidentUseCase;
    useFactory: (incidentRepository: SequelizeIncidentsRepository) => CreateIncidentUseCase;
    inject: (typeof SequelizeIncidentsRepository)[];
};
export declare const RemoveIncidentUseCaseProvider: {
    provide: typeof RemoveIncidentUseCase;
    useFactory: (incidentRepository: SequelizeIncidentsRepository) => RemoveIncidentUseCase;
    inject: (typeof SequelizeIncidentsRepository)[];
};
export declare const UpdateIncidentUseCaseProvider: {
    provide: typeof UpdateIncidentUseCase;
    useFactory: (incidentRepository: SequelizeIncidentsRepository) => UpdateIncidentUseCase;
    inject: (typeof SequelizeIncidentsRepository)[];
};
export declare const FindOneIncidentUseCaseProvider: {
    provide: typeof FindOneIncidentUseCase;
    useFactory: (incidentRepository: SequelizeIncidentsRepository) => FindOneIncidentUseCase;
    inject: (typeof SequelizeIncidentsRepository)[];
};
export declare const FindAllIncidentUseCaseProvider: {
    provide: typeof FindAllIncidentUseCase;
    useFactory: (incidentRepository: SequelizeIncidentsRepository) => FindAllIncidentUseCase;
    inject: (typeof SequelizeIncidentsRepository)[];
};
export declare const SearchByBikeUseCaseProvider: {
    provide: typeof SearchByBikeUseCase;
    useFactory: (incidentRepository: SequelizeIncidentsRepository) => SearchByBikeUseCase;
    inject: (typeof SequelizeIncidentsRepository)[];
};
declare const _default: ({
    provide: typeof CreateIncidentUseCase;
    useFactory: (incidentRepository: SequelizeIncidentsRepository) => CreateIncidentUseCase;
    inject: (typeof SequelizeIncidentsRepository)[];
} | {
    provide: typeof RemoveIncidentUseCase;
    useFactory: (incidentRepository: SequelizeIncidentsRepository) => RemoveIncidentUseCase;
    inject: (typeof SequelizeIncidentsRepository)[];
} | {
    provide: typeof UpdateIncidentUseCase;
    useFactory: (incidentRepository: SequelizeIncidentsRepository) => UpdateIncidentUseCase;
    inject: (typeof SequelizeIncidentsRepository)[];
} | {
    provide: typeof FindOneIncidentUseCase;
    useFactory: (incidentRepository: SequelizeIncidentsRepository) => FindOneIncidentUseCase;
    inject: (typeof SequelizeIncidentsRepository)[];
} | {
    provide: typeof FindAllIncidentUseCase;
    useFactory: (incidentRepository: SequelizeIncidentsRepository) => FindAllIncidentUseCase;
    inject: (typeof SequelizeIncidentsRepository)[];
} | {
    provide: typeof SearchByBikeUseCase;
    useFactory: (incidentRepository: SequelizeIncidentsRepository) => SearchByBikeUseCase;
    inject: (typeof SequelizeIncidentsRepository)[];
})[];
export default _default;
