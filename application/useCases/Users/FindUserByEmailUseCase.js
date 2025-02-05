"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindUserByEmailUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(email) {
        return this.usersRepository.findByEmail(email);
    }
}
exports.default = FindUserByEmailUseCase;
//# sourceMappingURL=FindUserByEmailUseCase.js.map