"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptProvider = void 0;
const bcrypt = require("bcrypt");
class BcryptProvider {
    async hash(plainText, saltRounds) {
        return bcrypt.hash(plainText, saltRounds);
    }
    async compare(plainText, hash) {
        return bcrypt.compare(plainText, hash);
    }
}
exports.BcryptProvider = BcryptProvider;
//# sourceMappingURL=bcrypt.provider.js.map