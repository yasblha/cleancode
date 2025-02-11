import CreatePartUseCase from "@application/useCases/parts/CreatePartUseCase";
import RemovePartUseCase from "@application/useCases/parts/RemovePartUseCase";
import UpdatePartUseCase from "@application/useCases/parts/UpdatePartUseCase";
import FindOnePartUseCase from "@application/useCases/parts/FindOnePartUseCase";
import FindAllPartUseCase from "@application/useCases/parts/FindAllPartUseCase";
import SearchByReferenceUseCase from "@application/useCases/Parts/SearchByReferenceUseCase";

import CreateAlertUseCase from "@application/useCases/alerts/CreateAlertUseCase";

import {SequelizePartsRepository} from "@infrastructure/sequelize/repositories/PartsRepository";
import MongooseAlertRepository from "@infrastructure/mongo/repositories/Alert";

export const CreatePartUseCaseProvider = {
  provide: CreatePartUseCase,
  useFactory: (PartRepository: SequelizePartsRepository) =>
    new CreatePartUseCase(PartRepository),
  inject: [SequelizePartsRepository],
};

export const RemovePartUseCaseProvider = {
  provide: RemovePartUseCase,
  useFactory: (PartRepository: SequelizePartsRepository) =>
    new RemovePartUseCase(PartRepository),
  inject: [SequelizePartsRepository],
};

export const UpdatePartUseCaseProvider = {
  provide: UpdatePartUseCase,
  useFactory: (
    PartRepository: SequelizePartsRepository,
    CreateAlertUseCase: CreateAlertUseCase,
  ) => new UpdatePartUseCase(PartRepository, CreateAlertUseCase),
  inject: [SequelizePartsRepository, CreateAlertUseCase],
};

export const FindOnePartUseCaseProvider = {
  provide: FindOnePartUseCase,
  useFactory: (PartRepository: SequelizePartsRepository) =>
    new FindOnePartUseCase(PartRepository),
  inject: [SequelizePartsRepository],
};

export const FindAllPartUseCaseProvider = {
  provide: FindAllPartUseCase,
  useFactory: (PartRepository: SequelizePartsRepository) =>
    new FindAllPartUseCase(PartRepository),
  inject: [SequelizePartsRepository],
};

export const SearchByReferenceUseCaseProvider = {
  provide: SearchByReferenceUseCase,
  useFactory: (PartRepository: SequelizePartsRepository) =>
    new SearchByReferenceUseCase(PartRepository),
  inject: [SequelizePartsRepository],
};

export const CreateAlertUseCaseProvider = {
  provide: CreateAlertUseCase,
  useFactory: (alertRepository: MongooseAlertRepository) =>
    new CreateAlertUseCase(alertRepository),
  inject: [MongooseAlertRepository],
};

export default [
  CreatePartUseCaseProvider,
  RemovePartUseCaseProvider,
  UpdatePartUseCaseProvider,
  FindOnePartUseCaseProvider,
  FindAllPartUseCaseProvider,
  SearchByReferenceUseCaseProvider,
  CreateAlertUseCaseProvider,
  MongooseAlertRepository,
];
