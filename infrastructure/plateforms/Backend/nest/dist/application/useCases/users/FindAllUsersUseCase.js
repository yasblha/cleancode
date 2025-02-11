"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindAllUserUserCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute() {
        return this.userRepository.findAll();
    }
}
exports.default = FindAllUserUserCase;
//# sourceMappingURL=FindAllUsersUseCase.js.map