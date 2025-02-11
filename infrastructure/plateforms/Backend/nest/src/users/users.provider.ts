import CreateUserUseCase from "@application/useCases/users/CreateUserUseCase";
import RemoveUserUseCase from "@application/useCases/users/RemoveUserUseCase";
import UpdateUserUseCase from "@application/useCases/users/UpdateUserUseCase";
import FindUserUseCase from "@application/useCases/users/FindUserUseCase";
import FindAllUsersUseCase from "@application/useCases/users/FindAllUsersUseCase";
import FindUserByEmailUseCase from "@application/useCases/users/FindUserByEmailUseCase";

import {PasswordService} from "@application/services/PasswordService";
import {SequelizeUsersRepository} from "@infrastructure/sequelize/repositories/UsersRepository";

export const CreateUserUseCaseProvider = {
  provide: CreateUserUseCase,
  useFactory: (
    userRepository: SequelizeUsersRepository,
    passwordService: PasswordService,
  ) => new CreateUserUseCase(userRepository, passwordService),
  inject: [SequelizeUsersRepository, PasswordService],
};

export const RemoveUserUseCaseProvider = {
  provide: RemoveUserUseCase,
  useFactory: (userRepository: SequelizeUsersRepository) =>
    new RemoveUserUseCase(userRepository),
  inject: [SequelizeUsersRepository],
};

export const UpdateUserUseCaseProvider = {
  provide: UpdateUserUseCase,
  useFactory: (
    userRepository: SequelizeUsersRepository,
    passwordService: PasswordService,
  ) => new UpdateUserUseCase(userRepository, passwordService),
  inject: [SequelizeUsersRepository, PasswordService],
};

export const FindOneUserUseCaseProvider = {
  provide: FindUserUseCase,
  useFactory: (userRepository: SequelizeUsersRepository) =>
    new FindUserUseCase(userRepository),
  inject: [SequelizeUsersRepository],
};

export const FindAllUserUseCaseProvider = {
  provide: FindAllUsersUseCase,
  useFactory: (userRepository: SequelizeUsersRepository) =>
    new FindAllUsersUseCase(userRepository),
  inject: [SequelizeUsersRepository],
};

export const SearchByEmailUserUseCaseProvider = {
  provide: FindUserByEmailUseCase,
  useFactory: (userRepository: SequelizeUsersRepository) =>
    new FindUserByEmailUseCase(userRepository),
  inject: [SequelizeUsersRepository],
};

export default [
  CreateUserUseCaseProvider,
  RemoveUserUseCaseProvider,
  UpdateUserUseCaseProvider,
  FindOneUserUseCaseProvider,
  FindAllUserUseCaseProvider,
  SearchByEmailUserUseCaseProvider,
  PasswordService,
];
