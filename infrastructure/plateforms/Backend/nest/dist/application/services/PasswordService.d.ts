export interface BcryptProviderInterface {
    hash(plainText: string, saltRounds: number): Promise<string>;
    compare(plainText: string, hash: string): Promise<boolean>;
}
export interface PasswordServiceInterface {
    hashPassword(plainPassword: string): Promise<string>;
    verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean>;
}
export declare class PasswordService implements PasswordServiceInterface {
    private readonly bcryptProvider;
    private readonly saltRounds;
    constructor(bcryptProvider: BcryptProviderInterface);
    private validatePassword;
    hashPassword(plainPassword: string): Promise<string>;
    verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean>;
}
