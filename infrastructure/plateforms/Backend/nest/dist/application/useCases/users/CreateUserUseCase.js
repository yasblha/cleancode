"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateUserUseCase {
    constructor(userRepository, passwordService) {
        this.userRepository = userRepository;
        this.passwordService = passwordService;
    }
    async execute(user) {
        const hashedPassword = await this.passwordService.hashPassword(user.password);
        const userToCreate = { ...user, password: hashedPassword };
        return this.userRepository.create(userToCreate);
    }
}
exports.default = CreateUserUseCase;
//# sourceMappingURL=CreateUserUseCase.js.map