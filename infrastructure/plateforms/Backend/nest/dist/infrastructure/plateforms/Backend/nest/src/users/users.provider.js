"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchByEmailUserUseCaseProvider = exports.FindAllUserUseCaseProvider = exports.FindOneUserUseCaseProvider = exports.UpdateUserUseCaseProvider = exports.RemoveUserUseCaseProvider = exports.CreateUserUseCaseProvider = void 0;
const CreateUserUseCase_1 = require("../../../../../../application/useCases/users/CreateUserUseCase");
const RemoveUserUseCase_1 = require("../../../../../../application/useCases/users/RemoveUserUseCase");
const UpdateUserUseCase_1 = require("../../../../../../application/useCases/users/UpdateUserUseCase");
const FindUserUseCase_1 = require("../../../../../../application/useCases/users/FindUserUseCase");
const FindAllUsersUseCase_1 = require("../../../../../../application/useCases/users/FindAllUsersUseCase");
const FindUserByEmailUseCase_1 = require("../../../../../../application/useCases/users/FindUserByEmailUseCase");
const PasswordService_1 = require("../../../../../../application/services/PasswordService");
const UsersRepository_1 = require("../../../../../sequelize/repositories/UsersRepository");
exports.CreateUserUseCaseProvider = {
    provide: CreateUserUseCase_1.default,
    useFactory: (userRepository, passwordService) => new CreateUserUseCase_1.default(userRepository, passwordService),
    inject: [UsersRepository_1.SequelizeUsersRepository, PasswordService_1.PasswordService],
};
exports.RemoveUserUseCaseProvider = {
    provide: RemoveUserUseCase_1.default,
    useFactory: (userRepository) => new RemoveUserUseCase_1.default(userRepository),
    inject: [UsersRepository_1.SequelizeUsersRepository],
};
exports.UpdateUserUseCaseProvider = {
    provide: UpdateUserUseCase_1.default,
    useFactory: (userRepository, passwordService) => new UpdateUserUseCase_1.default(userRepository, passwordService),
    inject: [UsersRepository_1.SequelizeUsersRepository, PasswordService_1.PasswordService],
};
exports.FindOneUserUseCaseProvider = {
    provide: FindUserUseCase_1.default,
    useFactory: (userRepository) => new FindUserUseCase_1.default(userRepository),
    inject: [UsersRepository_1.SequelizeUsersRepository],
};
exports.FindAllUserUseCaseProvider = {
    provide: FindAllUsersUseCase_1.default,
    useFactory: (userRepository) => new FindAllUsersUseCase_1.default(userRepository),
    inject: [UsersRepository_1.SequelizeUsersRepository],
};
exports.SearchByEmailUserUseCaseProvider = {
    provide: FindUserByEmailUseCase_1.default,
    useFactory: (userRepository) => new FindUserByEmailUseCase_1.default(userRepository),
    inject: [UsersRepository_1.SequelizeUsersRepository],
};
exports.default = [
    exports.CreateUserUseCaseProvider,
    exports.RemoveUserUseCaseProvider,
    exports.UpdateUserUseCaseProvider,
    exports.FindOneUserUseCaseProvider,
    exports.FindAllUserUseCaseProvider,
    exports.SearchByEmailUserUseCaseProvider,
    PasswordService_1.PasswordService,
];
//# sourceMappingURL=users.provider.js.map