"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordTooShortError = void 0;
const ValidationError_1 = require("../ValidationError");
class PasswordTooShortError extends ValidationError_1.default {
    constructor() {
        super(...arguments);
        this.name = "PasswordTooShortError";
    }
}
exports.PasswordTooShortError = PasswordTooShortError;
//# sourceMappingURL=PasswordTooShortError.js.map