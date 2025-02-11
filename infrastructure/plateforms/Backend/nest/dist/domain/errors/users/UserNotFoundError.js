"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotFoundError_1 = require("../NotFoundError");
class UserNotFoundError extends NotFoundError_1.default {
    constructor(s) {
        super();
        this.name = "UserNotFoundError";
    }
}
exports.default = UserNotFoundError;
//# sourceMappingURL=UserNotFoundError.js.map