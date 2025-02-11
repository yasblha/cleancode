"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserNotFoundError_1 = require("../../../domain/errors/users/UserNotFoundError");
class UpdateUserUseCase {
    constructor(userRepository, passwordService) {
        this.userRepository = userRepository;
        this.passwordService = passwordService;
    }
    async execute(identifier, user) {
        if (user.password) {
            user.password = await this.passwordService.hashPassword(user.password);
        }
        const updatedUser = await this.userRepository.update(identifier, user);
        if (!updatedUser) {
            throw new UserNotFoundError_1.default(`User with id ${identifier} not found`);
        }
        return updatedUser;
    }
}
exports.default = UpdateUserUseCase;
//# sourceMappingURL=UpdateUserUseCase.js.map