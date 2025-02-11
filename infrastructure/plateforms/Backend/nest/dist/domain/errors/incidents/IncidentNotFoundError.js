"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotFoundError_1 = require("../NotFoundError");
class IncidentNotFoundError extends NotFoundError_1.default {
    constructor() {
        super(...arguments);
        this.name = "IncidentNotFoundError";
    }
}
exports.default = IncidentNotFoundError;
//# sourceMappingURL=IncidentNotFoundError.js.map