"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeUsersRepository = void 0;
const UserModel_1 = __importDefault(require("../models/UserModel"));
class SequelizeUsersRepository {
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            const newUser = yield UserModel_1.default.create(user);
            return newUser.toJSON();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield UserModel_1.default.findAll();
            return users.map(user => user.toJSON());
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserModel_1.default.findByPk(id);
            return user ? user.toJSON() : null;
        });
    }
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const [affectedCount] = yield UserModel_1.default.update(user, { where: { id } });
            if (affectedCount > 0) {
                const updatedUser = yield UserModel_1.default.findByPk(id);
                return updatedUser ? updatedUser.toJSON() : null;
            }
            return null;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const affectedCount = yield UserModel_1.default.destroy({ where: { id } });
            return affectedCount > 0;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserModel_1.default.findOne({ where: { email } });
            return user ? user.toJSON() : null;
        });
    }
}
exports.SequelizeUsersRepository = SequelizeUsersRepository;
//# sourceMappingURL=UsersRepository.js.map