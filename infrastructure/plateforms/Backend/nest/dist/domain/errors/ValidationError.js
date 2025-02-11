"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidationError extends Error {
    constructor() {
        super(...arguments);
        this.name = "ValidationError";
    }
}
exports.default = ValidationError;
//# sourceMappingURL=ValidationError.js.map