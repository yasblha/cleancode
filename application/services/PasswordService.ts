import { PasswordHashError } from "@domain/errors/PasswordHashError";
import { PasswordTooShortError } from "@domain/errors/users/PasswordTooShortError";
import { PasswordDoesNotIncludeLowercaseLetterError } from "@domain/errors/users/PasswordDoesNotIncludeLowercaseLetterError";
import { PasswordDoesNotIncludeNumberError } from "@domain/errors/users/PasswordDoesNotIncludeNumberError";
import { PasswordDoesNotIncludeSymbolError } from "@domain/errors/users/PasswordDoesNotIncludeSymbolError";
import { PasswordDoesNotIncludeUppercaseLetterError } from "@domain/errors/users/PasswordDoesNotIncludeUppercaseLetterError";

export interface BcryptProviderInterface {
  hash(plainText: string, saltRounds: number): Promise<string>;
  compare(plainText: string, hash: string): Promise<boolean>;
}

export interface PasswordServiceInterface {
  hashPassword(plainPassword: string): Promise<string>;
  verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean>;
}

export class PasswordService implements PasswordServiceInterface {
  private readonly saltRounds: number = parseInt(process.env.PASSWORD_SALT_ROUNDS || "10");

  constructor(private readonly bcryptProvider: BcryptProviderInterface) {}

  private validatePassword(value: string): void {
    if (value.length < 8) {
      throw new PasswordTooShortError();
    }
    if (!/(?=\d)/.test(value)) {
      throw new PasswordDoesNotIncludeNumberError();
    }
    if (!/(?=[a-z])/.test(value)) {
      throw new PasswordDoesNotIncludeLowercaseLetterError();
    }
    if (!/(?=[A-Z])/.test(value)) {
      throw new PasswordDoesNotIncludeUppercaseLetterError();
    }
    if (!/(?=[^a-zA-Z0-9])/.test(value)) {
      throw new PasswordDoesNotIncludeSymbolError();
    }
  }

  async hashPassword(plainPassword: string): Promise<string> {
    this.validatePassword(plainPassword);
    try {
      const hashed = await this.bcryptProvider.hash(plainPassword, this.saltRounds);
      return hashed;
    } catch (error) {
      throw new PasswordHashError(error instanceof Error ? error.message : String(error));
    }
  }

  async verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return this.bcryptProvider.compare(plainPassword, hashedPassword);
  }
}
