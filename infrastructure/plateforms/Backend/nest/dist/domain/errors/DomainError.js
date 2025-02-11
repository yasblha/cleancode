"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainError = void 0;
class DomainError extends Error {
    constructor(message) {
        super(message);
        this.name = "DomainError";
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.DomainError = DomainError;
//# sourceMappingURL=DomainError.js.map