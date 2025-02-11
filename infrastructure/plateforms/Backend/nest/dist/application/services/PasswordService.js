"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordService = void 0;
const PasswordHashError_1 = require("../../domain/errors/PasswordHashError");
const PasswordTooShortError_1 = require("../../domain/errors/users/PasswordTooShortError");
const PasswordDoesNotIncludeLowercaseLetterError_1 = require("../../domain/errors/users/PasswordDoesNotIncludeLowercaseLetterError");
const PasswordDoesNotIncludeNumberError_1 = require("../../domain/errors/users/PasswordDoesNotIncludeNumberError");
const PasswordDoesNotIncludeSymbolError_1 = require("../../domain/errors/users/PasswordDoesNotIncludeSymbolError");
const PasswordDoesNotIncludeUppercaseLetterError_1 = require("../../domain/errors/users/PasswordDoesNotIncludeUppercaseLetterError");
class PasswordService {
    constructor(bcryptProvider) {
        this.bcryptProvider = bcryptProvider;
        this.saltRounds = parseInt(process.env.PASSWORD_SALT_ROUNDS || "10");
    }
    validatePassword(value) {
        if (value.length < 8) {
            throw new PasswordTooShortError_1.PasswordTooShortError();
        }
        if (!/(?=\d)/.test(value)) {
            throw new PasswordDoesNotIncludeNumberError_1.PasswordDoesNotIncludeNumberError();
        }
        if (!/(?=[a-z])/.test(value)) {
            throw new PasswordDoesNotIncludeLowercaseLetterError_1.PasswordDoesNotIncludeLowercaseLetterError();
        }
        if (!/(?=[A-Z])/.test(value)) {
            throw new PasswordDoesNotIncludeUppercaseLetterError_1.PasswordDoesNotIncludeUppercaseLetterError();
        }
        if (!/(?=[^a-zA-Z0-9])/.test(value)) {
            throw new PasswordDoesNotIncludeSymbolError_1.PasswordDoesNotIncludeSymbolError();
        }
    }
    async hashPassword(plainPassword) {
        this.validatePassword(plainPassword);
        try {
            const hashed = await this.bcryptProvider.hash(plainPassword, this.saltRounds);
            return hashed;
        }
        catch (error) {
            throw new PasswordHashError_1.PasswordHashError(error instanceof Error ? error.message : String(error));
        }
    }
    async verifyPassword(plainPassword, hashedPassword) {
        return this.bcryptProvider.compare(plainPassword, hashedPassword);
    }
}
exports.PasswordService = PasswordService;
//# sourceMappingURL=PasswordService.js.map