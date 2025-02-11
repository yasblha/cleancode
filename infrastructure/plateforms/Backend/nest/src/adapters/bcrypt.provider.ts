import * as bcrypt from "bcrypt";
import { BcryptProviderInterface } from "@application/services/PasswordService";

export class BcryptProvider implements BcryptProviderInterface {
  async hash(plainText: string, saltRounds: number): Promise<string> {
    return bcrypt.hash(plainText, saltRounds);
  }
  async compare(plainText: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plainText, hash);
  }
}
