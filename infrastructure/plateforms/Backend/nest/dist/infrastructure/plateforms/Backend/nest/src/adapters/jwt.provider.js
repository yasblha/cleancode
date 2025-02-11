"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtProvider = void 0;
const jwt = require("jsonwebtoken");
class JwtProvider {
    sign(payload, secret, options) {
        return jwt.sign(payload, secret, options);
    }
    verify(token, secret) {
        return jwt.verify(token, secret);
    }
}
exports.JwtProvider = JwtProvider;
//# sourceMappingURL=jwt.provider.js.map