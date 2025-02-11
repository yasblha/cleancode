"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModel = exports.CompanySchema = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const CompanySchema = new mongoose_1.Schema({
    identifier: {
        type: String,
        default: uuid_1.v4,
        index: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    bikes: [
        {
            type: String,
        },
    ],
}, { timestamps: true });
exports.CompanySchema = CompanySchema;
const CompanyModel = (0, mongoose_1.model)("Company", CompanySchema);
exports.CompanyModel = CompanyModel;
//# sourceMappingURL=Company.js.map