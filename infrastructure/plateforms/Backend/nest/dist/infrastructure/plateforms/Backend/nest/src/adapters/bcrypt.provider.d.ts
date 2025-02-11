import { BcryptProviderInterface } from "@application/services/PasswordService";
export declare class BcryptProvider implements BcryptProviderInterface {
    hash(plainText: string, saltRounds: number): Promise<string>;
    compare(plainText: string, hash: string): Promise<boolean>;
}
