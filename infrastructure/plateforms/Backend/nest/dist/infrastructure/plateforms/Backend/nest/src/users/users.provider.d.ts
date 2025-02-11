import CreateUserUseCase from "@application/useCases/users/CreateUserUseCase";
import RemoveUserUseCase from "@application/useCases/users/RemoveUserUseCase";
import UpdateUserUseCase from "@application/useCases/users/UpdateUserUseCase";
import FindUserUseCase from "@application/useCases/users/FindUserUseCase";
import FindAllUsersUseCase from "@application/useCases/users/FindAllUsersUseCase";
import FindUserByEmailUseCase from "@application/useCases/users/FindUserByEmailUseCase";
import { PasswordService } from "@application/services/PasswordService";
import { SequelizeUsersRepository } from "@infrastructure/sequelize/repositories/UsersRepository";
export declare const CreateUserUseCaseProvider: {
    provide: typeof CreateUserUseCase;
    useFactory: (userRepository: SequelizeUsersRepository, passwordService: PasswordService) => CreateUserUseCase;
    inject: (typeof SequelizeUsersRepository | typeof PasswordService)[];
};
export declare const RemoveUserUseCaseProvider: {
    provide: typeof RemoveUserUseCase;
    useFactory: (userRepository: SequelizeUsersRepository) => RemoveUserUseCase;
    inject: (typeof SequelizeUsersRepository)[];
};
export declare const UpdateUserUseCaseProvider: {
    provide: typeof UpdateUserUseCase;
    useFactory: (userRepository: SequelizeUsersRepository, passwordService: PasswordService) => UpdateUserUseCase;
    inject: (typeof SequelizeUsersRepository | typeof PasswordService)[];
};
export declare const FindOneUserUseCaseProvider: {
    provide: typeof FindUserUseCase;
    useFactory: (userRepository: SequelizeUsersRepository) => FindUserUseCase;
    inject: (typeof SequelizeUsersRepository)[];
};
export declare const FindAllUserUseCaseProvider: {
    provide: typeof FindAllUsersUseCase;
    useFactory: (userRepository: SequelizeUsersRepository) => FindAllUsersUseCase;
    inject: (typeof SequelizeUsersRepository)[];
};
export declare const SearchByEmailUserUseCaseProvider: {
    provide: typeof FindUserByEmailUseCase;
    useFactory: (userRepository: SequelizeUsersRepository) => FindUserByEmailUseCase;
    inject: (typeof SequelizeUsersRepository)[];
};
declare const _default: (typeof PasswordService | {
    provide: typeof CreateUserUseCase;
    useFactory: (userRepository: SequelizeUsersRepository, passwordService: PasswordService) => CreateUserUseCase;
    inject: (typeof SequelizeUsersRepository | typeof PasswordService)[];
} | {
    provide: typeof RemoveUserUseCase;
    useFactory: (userRepository: SequelizeUsersRepository) => RemoveUserUseCase;
    inject: (typeof SequelizeUsersRepository)[];
} | {
    provide: typeof UpdateUserUseCase;
    useFactory: (userRepository: SequelizeUsersRepository, passwordService: PasswordService) => UpdateUserUseCase;
    inject: (typeof SequelizeUsersRepository | typeof PasswordService)[];
} | {
    provide: typeof FindUserUseCase;
    useFactory: (userRepository: SequelizeUsersRepository) => FindUserUseCase;
    inject: (typeof SequelizeUsersRepository)[];
} | {
    provide: typeof FindAllUsersUseCase;
    useFactory: (userRepository: SequelizeUsersRepository) => FindAllUsersUseCase;
    inject: (typeof SequelizeUsersRepository)[];
} | {
    provide: typeof FindUserByEmailUseCase;
    useFactory: (userRepository: SequelizeUsersRepository) => FindUserByEmailUseCase;
    inject: (typeof SequelizeUsersRepository)[];
})[];
export default _default;
