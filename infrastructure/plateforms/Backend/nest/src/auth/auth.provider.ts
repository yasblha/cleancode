import LoginUseCase from "@application/useCases/LoginUseCase";
import AuthVerifyUseCase from "@application/useCases/AuthVerifyUseCase";
import {PasswordService} from "@application/services/PasswordService";
import {AuthenticationService} from "@application/services/AuthenticationService";
import { SequelizeUsersRepository } from "@infrastructure/sequelize/repositories/UsersRepository";

export const LoginUseCaseProvider = {
  provide: LoginUseCase,
  useFactory: (
    passwordService: PasswordService,
    authenticationService: AuthenticationService,
    userRepository: SequelizeUsersRepository,
  ) => new LoginUseCase(passwordService, authenticationService, userRepository),
  inject: [PasswordService, AuthenticationService, SequelizeUsersRepository],
};

export const AuthVerifyUseCaseProvider = {
  provide: AuthVerifyUseCase,
  useFactory: (
    authenticationService: AuthenticationService,
    userRepository: SequelizeUsersRepository,
  ) => new AuthVerifyUseCase(authenticationService, userRepository),
  inject: [AuthenticationService, SequelizeUsersRepository],
};

export default [
  LoginUseCaseProvider,
  AuthVerifyUseCaseProvider,
  PasswordService,
  AuthenticationService,
  SequelizeUsersRepository,
];
