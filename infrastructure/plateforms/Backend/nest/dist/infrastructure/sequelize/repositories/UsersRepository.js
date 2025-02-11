"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeUsersRepository = void 0;
const sequelize_1 = require("sequelize");
const UserModel_1 = require("../models/UserModel");
class SequelizeUsersRepository {
    async create(user) {
        const newUser = await UserModel_1.default.create(user);
        return newUser.toJSON();
    }
    async findAll() {
        const users = await UserModel_1.default.findAll();
        return users.map(user => user.toJSON());
    }
    async findOne(id) {
        const user = await UserModel_1.default.findByPk(id);
        return user ? user.toJSON() : null;
    }
    async update(id, user) {
        const [affectedCount] = await UserModel_1.default.update(user, { where: { id } });
        if (affectedCount > 0) {
            const updatedUser = await UserModel_1.default.findByPk(id);
            return updatedUser ? updatedUser.toJSON() : null;
        }
        return null;
    }
    async remove(id) {
        const affectedCount = await UserModel_1.default.destroy({ where: { id } });
        return affectedCount > 0;
    }
    async findByEmail(email) {
        const user = await UserModel_1.default.findOne({ where: { email } });
        return user ? user.toJSON() : null;
    }
    async searchByEmail(email) {
        const users = await UserModel_1.default.findAll({
            where: {
                email: {
                    [sequelize_1.Op.like]: `%${email}%`,
                },
            },
        });
        return users.map(user => user.toJSON());
    }
}
exports.SequelizeUsersRepository = SequelizeUsersRepository;
//# sourceMappingURL=UsersRepository.js.map