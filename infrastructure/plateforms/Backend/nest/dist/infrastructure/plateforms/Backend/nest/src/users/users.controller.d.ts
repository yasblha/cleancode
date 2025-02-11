import { Response } from "express";
import CreateUserUseCase from "@application/useCases/users/CreateUserUseCase";
import RemoveUserUseCase from "@application/useCases/users/RemoveUserUseCase";
import UpdateUserUseCase from "@application/useCases/users/UpdateUserUseCase";
import FindUserUseCase from "@application/useCases/users/FindUserUseCase";
import FindAllUsersUseCase from "@application/useCases/users/FindAllUsersUseCase";
import FindUserByEmailUseCase from "@application/useCases/users/FindUserByEmailUseCase";
import { UserDto, UpdateUserDto } from "./UserDto";
export declare class UsersController {
    private readonly CreateUserUseCase;
    private readonly RemoveUserUseCase;
    private readonly UpdateUserUseCase;
    private readonly FindOneUserUseCase;
    private readonly FindAllUserUseCase;
    private readonly SearchByEmailUserUseCase;
    constructor(CreateUserUseCase: CreateUserUseCase, RemoveUserUseCase: RemoveUserUseCase, UpdateUserUseCase: UpdateUserUseCase, FindOneUserUseCase: FindUserUseCase, FindAllUserUseCase: FindAllUsersUseCase, SearchByEmailUserUseCase: FindUserByEmailUseCase);
    create(user: UserDto, response: Response): Promise<any>;
    update(id: string, user: UpdateUserDto): Promise<import("@domain/entities/Users").User>;
    remove(id: string, response: Response): Promise<any>;
    findOne(id: string): Promise<import("@domain/entities/Users").User>;
    searchByEmail(email: string): Promise<import("@domain/entities/Users").User>;
    findAll(): Promise<import("@domain/entities/Users").User[]>;
}
