"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotFoundError_1 = require("../NotFoundError");
class AlertNotFoundError extends NotFoundError_1.default {
    constructor() {
        super(...arguments);
        this.name = "AlertNotFoundError";
    }
}
exports.default = AlertNotFoundError;
//# sourceMappingURL=AlertNotFoundError.js.map