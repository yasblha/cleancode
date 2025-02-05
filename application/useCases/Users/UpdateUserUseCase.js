"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(id, user) {
        return this.usersRepository.update(id, user);
    }
}
exports.default = UpdateUserUseCase;
//# sourceMappingURL=UpdateUserUseCase.js.map