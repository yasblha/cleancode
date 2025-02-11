"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserNotFoundError_1 = require("../../../domain/errors/users/UserNotFoundError");
class FindOneUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(identifier) {
        const user = await this.userRepository.findOne(identifier);
        if (!user) {
            throw new UserNotFoundError_1.default(`User with id ${identifier} not found`);
        }
        return user;
    }
}
exports.default = FindOneUserUseCase;
//# sourceMappingURL=FindUserUseCase.js.map