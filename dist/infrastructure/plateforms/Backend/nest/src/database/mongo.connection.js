"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME || 'root';
const MONGO_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD || 'password';
const MONGO_HOST = process.env.MONGO_HOST || 'mongo';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DB = process.env.MONGO_DB || 'my_database';
const connectionString = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
mongoose_1.default.connect(connectionString).then((dbo) => {
    console.log("DB mongo connected");
}, (err) => {
    console.log("error");
});
