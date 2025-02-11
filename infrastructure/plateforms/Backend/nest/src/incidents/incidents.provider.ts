import CreateIncidentUseCase from "@application/useCases/incidents/CreateIncidentUseCase";
import RemoveIncidentUseCase from "@application/useCases/incidents/RemoveIncidentUseCase";
import UpdateIncidentUseCase from "@application/useCases/incidents/UpdateIncidentUseCase";
import FindOneIncidentUseCase from "@application/useCases/incidents/FindOneIncidentUseCase";
import FindAllIncidentUseCase from "@application/useCases/incidents/FindAllIncidentUseCase";
import SearchByBikeUseCase from "@application/useCases/incidents/SearchByBikeUseCase";

import {SequelizeIncidentsRepository} from "@infrastructure/sequelize/repositories/IncidentsRepository";

export const CreateIncidentUseCaseProvider = {
  provide: CreateIncidentUseCase,
  useFactory: (incidentRepository: SequelizeIncidentsRepository) =>
    new CreateIncidentUseCase(incidentRepository),
  inject: [SequelizeIncidentsRepository],
};

export const RemoveIncidentUseCaseProvider = {
  provide: RemoveIncidentUseCase,
  useFactory: (incidentRepository: SequelizeIncidentsRepository) =>
    new RemoveIncidentUseCase(incidentRepository),
  inject: [SequelizeIncidentsRepository],
};

export const UpdateIncidentUseCaseProvider = {
  provide: UpdateIncidentUseCase,
  useFactory: (incidentRepository: SequelizeIncidentsRepository) =>
    new UpdateIncidentUseCase(incidentRepository),
  inject: [SequelizeIncidentsRepository],
};

export const FindOneIncidentUseCaseProvider = {
  provide: FindOneIncidentUseCase,
  useFactory: (incidentRepository: SequelizeIncidentsRepository) =>
    new FindOneIncidentUseCase(incidentRepository),
  inject: [SequelizeIncidentsRepository],
};

export const FindAllIncidentUseCaseProvider = {
  provide: FindAllIncidentUseCase,
  useFactory: (incidentRepository: SequelizeIncidentsRepository) =>
    new FindAllIncidentUseCase(incidentRepository),
  inject: [SequelizeIncidentsRepository],
};

export const SearchByBikeUseCaseProvider = {
  provide: SearchByBikeUseCase,
  useFactory: (incidentRepository: SequelizeIncidentsRepository) =>
    new SearchByBikeUseCase(incidentRepository),
  inject: [SequelizeIncidentsRepository],
};

export default [
  CreateIncidentUseCaseProvider,
  RemoveIncidentUseCaseProvider,
  UpdateIncidentUseCaseProvider,
  FindOneIncidentUseCaseProvider,
  FindAllIncidentUseCaseProvider,
  SearchByBikeUseCaseProvider,
];
