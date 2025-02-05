export declare class Users {
    id: string;
    name: string;
    email: string;
    password: string;
    roles: string;
    isActive: boolean;
    isEmailVerified: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    constructor(id: string, name: string, email: string, password: string, roles: string, isActive: boolean, isEmailVerified: boolean, createdAt: Date, updatedAt: Date | null);
}
