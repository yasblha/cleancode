"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordDoesNotIncludeLowercaseLetterError = void 0;
const ValidationError_1 = require("../ValidationError");
class PasswordDoesNotIncludeLowercaseLetterError extends ValidationError_1.default {
    constructor() {
        super(...arguments);
        this.name = "PasswordDoesNotIncludeLowercaseLetterError";
    }
}
exports.PasswordDoesNotIncludeLowercaseLetterError = PasswordDoesNotIncludeLowercaseLetterError;
//# sourceMappingURL=PasswordDoesNotIncludeLowercaseLetterError.js.map