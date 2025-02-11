import { SequelizeUsersRepository } from "@infrastructure/sequelize/repositories/UsersRepository";
import { User } from "@domain/entities/Users";
import {PasswordService} from "../../services/PasswordService";
import UserNotFoundError from "@domain/errors/users/UserNotFoundError";

export default class UpdateUserUseCase {
    public constructor(
        private readonly userRepository: SequelizeUsersRepository,
        private readonly passwordService: PasswordService,
    ) {}

    public async execute(identifier: string, user: Partial<User>): Promise<User> {
        if (user.password) {
            user.password = await this.passwordService.hashPassword(user.password);
        }

        const updatedUser = await this.userRepository.update(identifier, user);

        if (!updatedUser) {
            throw new UserNotFoundError(`User with id ${identifier} not found`);
        }

        return updatedUser;
    }
}