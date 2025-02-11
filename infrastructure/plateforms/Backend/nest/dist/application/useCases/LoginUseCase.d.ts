import { PasswordService } from "@application/services/PasswordService";
import { AuthenticationService } from "@application/services/AuthenticationService";
import { SequelizeUsersRepository } from "@infrastructure/sequelize/repositories/UsersRepository";
export default class LoginUseCase {
    private readonly passwordService;
    private readonly authenticationService;
    private readonly userRepository;
    constructor(passwordService: PasswordService, authenticationService: AuthenticationService, userRepository: SequelizeUsersRepository);
    execute(email: string, password: string): Promise<string>;
}
