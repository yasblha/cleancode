import CreateAlertUseCase from "@application/useCases/alerts/CreateAlertUseCase";
import UpdateAlertUseCase from "@application/useCases/alerts/UpdateAlertUseCase";
import FindOneAlertUseCase from "@application/useCases/alerts/FindOneAlertUseCase";
import FindAllAlertUseCase from "@application/useCases/alerts/FindAllAlertUseCase";

import MongooseAlertRepository from "@infrastructure/mongo/repositories/Alert";

export const CreateAlertUseCaseProvider = {
  provide: CreateAlertUseCase,
  useFactory: (alertRepository: MongooseAlertRepository) =>
    new CreateAlertUseCase(alertRepository),
  inject: [MongooseAlertRepository],
};

export const UpdateAlertUseCaseProvider = {
  provide: UpdateAlertUseCase,
  useFactory: (alertRepository: MongooseAlertRepository) =>
    new UpdateAlertUseCase(alertRepository),
  inject: [MongooseAlertRepository],
};

export const FindOneAlertUseCaseProvider = {
  provide: FindOneAlertUseCase,
  useFactory: (alertRepository: MongooseAlertRepository) =>
    new FindOneAlertUseCase(alertRepository),
  inject: [MongooseAlertRepository],
};

export const FindAllAlertUseCaseProvider = {
  provide: FindAllAlertUseCase,
  useFactory: (alertRepository: MongooseAlertRepository) =>
    new FindAllAlertUseCase(alertRepository),
  inject: [MongooseAlertRepository],
};

export default [
  CreateAlertUseCaseProvider,
  UpdateAlertUseCaseProvider,
  FindOneAlertUseCaseProvider,
  FindAllAlertUseCaseProvider,
];
