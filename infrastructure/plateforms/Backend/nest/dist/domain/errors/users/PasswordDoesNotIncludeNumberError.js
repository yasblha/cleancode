"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordDoesNotIncludeNumberError = void 0;
const ValidationError_1 = require("../ValidationError");
class PasswordDoesNotIncludeNumberError extends ValidationError_1.default {
    constructor() {
        super(...arguments);
        this.name = "PasswordDoesNotIncludeNumberError";
    }
}
exports.PasswordDoesNotIncludeNumberError = PasswordDoesNotIncludeNumberError;
//# sourceMappingURL=PasswordDoesNotIncludeNumberError.js.map