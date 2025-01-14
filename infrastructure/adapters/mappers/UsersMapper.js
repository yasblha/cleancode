"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersMapper = void 0;
const Users_1 = require("/../../../../../domain/entities/Users");
class UsersMapper {
    static toDomain(prismaUser) {
        return new Users_1.Users(prismaUser.id, prismaUser.name, prismaUser.email, prismaUser.password, prismaUser.roles, prismaUser.isActive, prismaUser.isEmailVerified, prismaUser.createdAt, prismaUser.updatedAt);
    }
    static toPrisma(domainUser) {
        return {
            id: domainUser.id,
            name: domainUser.name,
            email: domainUser.email,
            password: domainUser.password,
            roles: domainUser.roles,
            isActive: domainUser.isActive,
            isEmailVerified: domainUser.isEmailVerified,
            createdAt: domainUser.createdAt,
            updatedAt: domainUser.updatedAt,
        };
    }
}
exports.UsersMapper = UsersMapper;
