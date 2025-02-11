import { SequelizeUsersRepository } from "@infrastructure/sequelize/repositories/UsersRepository";
import { PasswordService } from "@application/services/PasswordService";
import { User } from "@domain/entities/Users";
import { UserDto } from "@infrastructure/plateforms/Backend/nest/src/users/UserDto";
export default class CreateUserUseCase {
    private readonly userRepository;
    private readonly passwordService;
    constructor(userRepository: SequelizeUsersRepository, passwordService: PasswordService);
    execute(user: UserDto): Promise<User>;
}
