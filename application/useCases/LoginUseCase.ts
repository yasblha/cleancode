import UnexpectedError from "@domain/errors/UnexpectedError";
import {PasswordService} from "@application/services/PasswordService";
import UserNotFoundError from "@domain/errors/users/UserNotFoundError";
import {AuthenticationService} from "@application/services/AuthenticationService";
import { SequelizeUsersRepository } from "@infrastructure/sequelize/repositories/UsersRepository";

export default class LoginUseCase {
  public constructor(
      private readonly passwordService: PasswordService,
      private readonly authenticationService: AuthenticationService,
      private readonly userRepository: SequelizeUsersRepository,
  ) {}

  public async execute(email: string, password: string): Promise<string> {
    try {
      const user = await this.userRepository.findByEmail(email);
      if (!user) {
        throw new UserNotFoundError("User not found");
      }

      const passwordValid = await this.passwordService.verifyPassword(
          password,
          user.password,
      );
      if (!passwordValid) {
        throw new UserNotFoundError("User not found");
      }

      return await this.authenticationService.createAuthenticationToken(
          user.id,
      );
    } catch (error) {
      throw new UnexpectedError(
          error instanceof Error ? error.message : String(error),
      );
    }
  }
}
