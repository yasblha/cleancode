"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnexpectedError extends Error {
    constructor() {
        super(...arguments);
        this.name = "UnexpectedError";
    }
}
exports.default = UnexpectedError;
//# sourceMappingURL=UnexpectedError.js.map