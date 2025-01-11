import { User as PrismaUser } from '@prisma/client';
import { Users } from '/../../../../../domain/entities/Users';

export class UsersMapper {
    static toDomain(prismaUser: PrismaUser): Users {
        return new Users(
            prismaUser.id,
            prismaUser.name,
            prismaUser.email,
            prismaUser.password,
            prismaUser.roles,
            prismaUser.isActive,
            prismaUser.isEmailVerified,
            prismaUser.createdAt,
            prismaUser.updatedAt,
        );
    }

    static toPrisma(domainUser: Users): PrismaUser {
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