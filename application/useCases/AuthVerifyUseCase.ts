import UserNotFoundError from "@domain/errors/users/UserNotFoundError";
import {AuthenticationService} from "@application/services/AuthenticationService";
import { SequelizeUsersRepository } from "@infrastructure/sequelize/repositories/UsersRepository";
//import { UnauthorizedError } from "@domain/errors/UnauthorizedError";

export default class AuthVerifyUseCase {
  public constructor(
      private readonly authenticationService: AuthenticationService,
      private readonly userRepository: SequelizeUsersRepository,
  ) {}

  public async execute(token: string) {
    const userIdOrError = await this.authenticationService.verifyAuthenticationToken(token);

    if (typeof userIdOrError !== "string") {
      //throw new UnauthorizedError("Token invalide");
      return null;
    }

    const user = await this.userRepository.findOne(userIdOrError);

    if (!user) {
      throw new UserNotFoundError("Utilisateur non trouvé");
    }

    return user;
  }
}
