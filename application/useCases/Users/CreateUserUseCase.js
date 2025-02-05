"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(user) {
        return this.usersRepository.create(user);
    }
}
exports.default = CreateUserUseCase;
//# sourceMappingURL=CreateUserUseCase.js.map