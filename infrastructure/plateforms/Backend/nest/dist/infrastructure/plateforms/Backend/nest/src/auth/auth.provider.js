"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthVerifyUseCaseProvider = exports.LoginUseCaseProvider = void 0;
const LoginUseCase_1 = require("../../../../../../application/useCases/LoginUseCase");
const AuthVerifyUseCase_1 = require("../../../../../../application/useCases/AuthVerifyUseCase");
const PasswordService_1 = require("../../../../../../application/services/PasswordService");
const AuthenticationService_1 = require("../../../../../../application/services/AuthenticationService");
const UsersRepository_1 = require("../../../../../sequelize/repositories/UsersRepository");
exports.LoginUseCaseProvider = {
    provide: LoginUseCase_1.default,
    useFactory: (passwordService, authenticationService, userRepository) => new LoginUseCase_1.default(passwordService, authenticationService, userRepository),
    inject: [PasswordService_1.PasswordService, AuthenticationService_1.AuthenticationService, UsersRepository_1.SequelizeUsersRepository],
};
exports.AuthVerifyUseCaseProvider = {
    provide: AuthVerifyUseCase_1.default,
    useFactory: (authenticationService, userRepository) => new AuthVerifyUseCase_1.default(authenticationService, userRepository),
    inject: [AuthenticationService_1.AuthenticationService, UsersRepository_1.SequelizeUsersRepository],
};
exports.default = [
    exports.LoginUseCaseProvider,
    exports.AuthVerifyUseCaseProvider,
    PasswordService_1.PasswordService,
    AuthenticationService_1.AuthenticationService,
    UsersRepository_1.SequelizeUsersRepository,
];
//# sourceMappingURL=auth.provider.js.map