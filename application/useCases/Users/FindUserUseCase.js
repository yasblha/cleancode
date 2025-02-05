"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindOneUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(id) {
        return this.usersRepository.findOne(id);
    }
}
exports.default = FindOneUserUseCase;
//# sourceMappingURL=FindUserUseCase.js.map