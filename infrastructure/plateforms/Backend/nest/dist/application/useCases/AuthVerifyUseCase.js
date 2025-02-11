"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserNotFoundError_1 = require("../../domain/errors/users/UserNotFoundError");
const UnauthorizedError_1 = require("../../domain/errors/UnauthorizedError");
class AuthVerifyUseCase {
    constructor(authenticationService, userRepository) {
        this.authenticationService = authenticationService;
        this.userRepository = userRepository;
    }
    async execute(token) {
        const userIdOrError = await this.authenticationService.verifyAuthenticationToken(token);
        if (typeof userIdOrError !== "string") {
            throw new UnauthorizedError_1.UnauthorizedError("Token invalide");
        }
        const user = await this.userRepository.findOne(userIdOrError);
        if (!user) {
            throw new UserNotFoundError_1.default("Utilisateur non trouvé");
        }
        return user;
    }
}
exports.default = AuthVerifyUseCase;
//# sourceMappingURL=AuthVerifyUseCase.js.map