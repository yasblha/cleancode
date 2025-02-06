"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VinIdentifier {
    constructor(value) {
        if (!this.validate(value)) {
            throw new Error('Invalid VIN : ${value}');
        }
        this.value = value;
    }
    validate(value) {
        const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;
        return vinRegex.test(value);
    }
    equals(other) {
        return this.value === other.value;
    }
}
exports.default = VinIdentifier;
