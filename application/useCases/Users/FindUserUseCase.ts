import { SequelizeUsersRepository } from "@infrastructure/sequelize/repositories/UsersRepository";
import { User } from "@domain/entities/Users";
import UserNotFoundError from "@domain/errors/users/UserNotFoundError";

export default class FindOneUserUseCase {
    public constructor(
        private readonly userRepository: SequelizeUsersRepository,
    ) {}

    public async execute(identifier: string): Promise<User> {
        const user = await this.userRepository.findOne(identifier);

        if (!user) {
            throw new UserNotFoundError(`User with id ${identifier} not found`);
        }

        return user;
    }
}
