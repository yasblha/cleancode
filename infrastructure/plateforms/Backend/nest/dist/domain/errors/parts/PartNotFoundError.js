"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotFoundError_1 = require("../NotFoundError");
class PartNotFoundError extends NotFoundError_1.default {
    constructor() {
        super(...arguments);
        this.name = "PartNotFoundError";
    }
}
exports.default = PartNotFoundError;
//# sourceMappingURL=PartNotFoundError.js.map