"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
const TokenGenerationError_1 = require("../../domain/errors/TokenGenerationError");
const UnauthorizedError_1 = require("../../domain/errors/UnauthorizedError");
class AuthenticationService {
    constructor(jwtProvider) {
        this.jwtProvider = jwtProvider;
        this.jwtSecret = process.env.JWT_SECRET || "secret";
        this.jwtExpiresIn = parseInt(process.env.JWT_EXPIRES_IN || "3600");
    }
    async createAuthenticationToken(userIdentifier) {
        try {
            const payload = { id: userIdentifier };
            const options = { expiresIn: this.jwtExpiresIn };
            const token = this.jwtProvider.sign(payload, this.jwtSecret, options);
            return token;
        }
        catch (error) {
            throw new TokenGenerationError_1.TokenGenerationError();
        }
    }
    async verifyAuthenticationToken(authenticationToken) {
        try {
            const decoded = this.jwtProvider.verify(authenticationToken, this.jwtSecret);
            if (!decoded || !decoded.id) {
                return new UnauthorizedError_1.UnauthorizedError();
            }
            return decoded.id;
        }
        catch (error) {
            return new UnauthorizedError_1.UnauthorizedError();
        }
    }
}
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=AuthenticationService.js.map