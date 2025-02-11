"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotFoundError extends Error {
    constructor() {
        super(...arguments);
        this.name = "NotFoundError";
    }
}
exports.default = NotFoundError;
//# sourceMappingURL=NotFoundError.js.map