import LoginUseCase from "@application/useCases/LoginUseCase";
import AuthVerifyUseCase from "@application/useCases/AuthVerifyUseCase";
import { PasswordService } from "@application/services/PasswordService";
import { AuthenticationService } from "@application/services/AuthenticationService";
import { SequelizeUsersRepository } from "@infrastructure/sequelize/repositories/UsersRepository";
export declare const LoginUseCaseProvider: {
    provide: typeof LoginUseCase;
    useFactory: (passwordService: PasswordService, authenticationService: AuthenticationService, userRepository: SequelizeUsersRepository) => LoginUseCase;
    inject: (typeof SequelizeUsersRepository | typeof PasswordService | typeof AuthenticationService)[];
};
export declare const AuthVerifyUseCaseProvider: {
    provide: typeof AuthVerifyUseCase;
    useFactory: (authenticationService: AuthenticationService, userRepository: SequelizeUsersRepository) => AuthVerifyUseCase;
    inject: (typeof SequelizeUsersRepository | typeof AuthenticationService)[];
};
declare const _default: (typeof SequelizeUsersRepository | typeof PasswordService | typeof AuthenticationService | {
    provide: typeof LoginUseCase;
    useFactory: (passwordService: PasswordService, authenticationService: AuthenticationService, userRepository: SequelizeUsersRepository) => LoginUseCase;
    inject: (typeof SequelizeUsersRepository | typeof PasswordService | typeof AuthenticationService)[];
} | {
    provide: typeof AuthVerifyUseCase;
    useFactory: (authenticationService: AuthenticationService, userRepository: SequelizeUsersRepository) => AuthVerifyUseCase;
    inject: (typeof SequelizeUsersRepository | typeof AuthenticationService)[];
})[];
export default _default;
