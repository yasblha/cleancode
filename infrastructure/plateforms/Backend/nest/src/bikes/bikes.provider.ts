import CreateBikeUseCase from "@application/useCases/bikes/CreateBikeUseCase";
import RemoveBikeUseCase from "@application/useCases/bikes/RemoveBikeUseCase";
import UpdateBikeUseCase from "@application/useCases/bikes/UpdateBikeUseCase";
import FindOneBikeUseCase from "@application/useCases/bikes/FindOneBikeUseCase";
import FindAllBikeUseCase from "@application/useCases/bikes/FindAllBikeUseCase";

import {SequelizeBikesRepository} from "@infrastructure/sequelize/repositories/BikesRepository";

export const CreateBikeUseCaseProvider = {
  provide: CreateBikeUseCase,
  useFactory: (bikeRepository: SequelizeBikesRepository) =>
    new CreateBikeUseCase(bikeRepository),
  inject: [SequelizeBikesRepository],
};

export const RemoveBikeUseCaseProvider = {
  provide: RemoveBikeUseCase,
  useFactory: (bikeRepository: SequelizeBikesRepository) =>
    new RemoveBikeUseCase(bikeRepository),
  inject: [SequelizeBikesRepository],
};

export const UpdateBikeUseCaseProvider = {
  provide: UpdateBikeUseCase,
  useFactory: (bikeRepository: SequelizeBikesRepository) =>
    new UpdateBikeUseCase(bikeRepository),
  inject: [SequelizeBikesRepository],
};

export const FindOneBikeUseCaseProvider = {
  provide: FindOneBikeUseCase,
  useFactory: (bikeRepository: SequelizeBikesRepository) =>
    new FindOneBikeUseCase(bikeRepository),
  inject: [SequelizeBikesRepository],
};

export const FindAllBikeUseCaseProvider = {
  provide: FindAllBikeUseCase,
  useFactory: (bikeRepository: SequelizeBikesRepository) =>
    new FindAllBikeUseCase(bikeRepository),
  inject: [SequelizeBikesRepository],
};

export default [
  CreateBikeUseCaseProvider,
  RemoveBikeUseCaseProvider,
  UpdateBikeUseCaseProvider,
  FindOneBikeUseCaseProvider,
  FindAllBikeUseCaseProvider,
];
