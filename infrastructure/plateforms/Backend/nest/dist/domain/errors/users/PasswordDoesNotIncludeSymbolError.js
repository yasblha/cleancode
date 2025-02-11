"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordDoesNotIncludeSymbolError = void 0;
const ValidationError_1 = require("../ValidationError");
class PasswordDoesNotIncludeSymbolError extends ValidationError_1.default {
    constructor() {
        super(...arguments);
        this.name = "PasswordDoesNotIncludeSymbolError";
    }
}
exports.PasswordDoesNotIncludeSymbolError = PasswordDoesNotIncludeSymbolError;
//# sourceMappingURL=PasswordDoesNotIncludeSymbolError.js.map