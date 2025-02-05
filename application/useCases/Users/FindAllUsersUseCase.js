"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindAllUsersUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute() {
        return this.usersRepository.findAll();
    }
}
exports.default = FindAllUsersUseCase;
//# sourceMappingURL=FindAllUsersUseCase.js.map