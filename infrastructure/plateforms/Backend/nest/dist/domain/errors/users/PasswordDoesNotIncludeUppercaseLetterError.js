"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordDoesNotIncludeUppercaseLetterError = void 0;
const ValidationError_1 = require("../ValidationError");
class PasswordDoesNotIncludeUppercaseLetterError extends ValidationError_1.default {
    constructor() {
        super(...arguments);
        this.name = "PasswordDoesNotIncludeUppercaseLetterError";
    }
}
exports.PasswordDoesNotIncludeUppercaseLetterError = PasswordDoesNotIncludeUppercaseLetterError;
//# sourceMappingURL=PasswordDoesNotIncludeUppercaseLetterError.js.map