"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemoveUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(id) {
        return this.usersRepository.remove(id);
    }
}
exports.default = RemoveUserUseCase;
//# sourceMappingURL=RemoveUserUseCase.js.map