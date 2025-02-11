import { AuthenticationService } from "@application/services/AuthenticationService";
import { SequelizeUsersRepository } from "@infrastructure/sequelize/repositories/UsersRepository";
export default class AuthVerifyUseCase {
    private readonly authenticationService;
    private readonly userRepository;
    constructor(authenticationService: AuthenticationService, userRepository: SequelizeUsersRepository);
    execute(token: string): Promise<import("../entities/Users").User>;
}
