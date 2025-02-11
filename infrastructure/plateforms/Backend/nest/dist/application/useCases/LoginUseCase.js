"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnexpectedError_1 = require("../../domain/errors/UnexpectedError");
const UserNotFoundError_1 = require("../../domain/errors/users/UserNotFoundError");
class LoginUseCase {
    constructor(passwordService, authenticationService, userRepository) {
        this.passwordService = passwordService;
        this.authenticationService = authenticationService;
        this.userRepository = userRepository;
    }
    async execute(email, password) {
        try {
            const user = await this.userRepository.findByEmail(email);
            if (!user) {
                throw new UserNotFoundError_1.default("User not found");
            }
            const passwordValid = await this.passwordService.verifyPassword(password, user.password);
            if (!passwordValid) {
                throw new UserNotFoundError_1.default("User not found");
            }
            return await this.authenticationService.createAuthenticationToken(user.id);
        }
        catch (error) {
            throw new UnexpectedError_1.default(error instanceof Error ? error.message : String(error));
        }
    }
}
exports.default = LoginUseCase;
//# sourceMappingURL=LoginUseCase.js.map