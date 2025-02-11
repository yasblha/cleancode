"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserNotFoundError_1 = require("../../../domain/errors/users/UserNotFoundError");
class FindByEmailUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(email) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new UserNotFoundError_1.default(`User with email ${email} not found`);
        }
        return user;
    }
}
exports.default = FindByEmailUseCase;
//# sourceMappingURL=FindUserByEmailUseCase.js.map