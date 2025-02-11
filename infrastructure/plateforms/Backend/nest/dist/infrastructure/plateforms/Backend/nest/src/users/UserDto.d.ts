import { User } from "@domain/entities/Users";
export declare class UserDto implements Partial<User> {
    readonly identifier: string;
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly password: string;
    readonly roles: string;
    readonly isActive: boolean;
}
export declare class UpdateUserDto implements Partial<User> {
    readonly email?: string;
    readonly firstName?: string;
    readonly lastName?: string;
    readonly password?: string;
    readonly roles?: string;
    readonly isActive?: boolean;
}
