"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotFoundError_1 = require("../NotFoundError");
class CompanyNotFoundError extends NotFoundError_1.default {
    constructor() {
        super(...arguments);
        this.name = "CompanyNotFoundError";
    }
}
exports.default = CompanyNotFoundError;
//# sourceMappingURL=CompanyNotFoundError.js.map