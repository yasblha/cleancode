"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertModel = exports.AlertSchema = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const AlertSchema = new mongoose_1.Schema({
    identifier: {
        type: String,
        default: uuid_1.v4,
        index: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    part: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.AlertSchema = AlertSchema;
const AlertModel = (0, mongoose_1.model)("Alert", AlertSchema);
exports.AlertModel = AlertModel;
//# sourceMappingURL=Alert.js.map