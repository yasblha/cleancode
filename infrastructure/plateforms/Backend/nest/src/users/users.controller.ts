import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { Response } from "express";

import CreateUserUseCase from "@application/useCases/users/CreateUserUseCase";
import RemoveUserUseCase from "@application/useCases/users/RemoveUserUseCase";
import UpdateUserUseCase from "@application/useCases/users/UpdateUserUseCase";
import FindUserUseCase from "@application/useCases/users/FindUserUseCase";
import FindAllUsersUseCase from "@application/useCases/users/FindAllUsersUseCase";
import FindUserByEmailUseCase from "@application/useCases/users/FindUserByEmailUseCase";
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiProperty,
  ApiResponse,
} from "@nestjs/swagger";
import { UserDto, UpdateUserDto } from "./UserDto";

@Controller("users")
@ApiBearerAuth()
export class UsersController {
  constructor(
    private readonly CreateUserUseCase: CreateUserUseCase,
    private readonly RemoveUserUseCase: RemoveUserUseCase,
    private readonly UpdateUserUseCase: UpdateUserUseCase,
    private readonly FindOneUserUseCase: FindUserUseCase,
    private readonly FindAllUserUseCase: FindAllUsersUseCase,
    private readonly SearchByEmailUserUseCase: FindUserByEmailUseCase,
  ) {}

  @Post()
  @ApiProperty({ type: UserDto })
  @ApiCreatedResponse({
    description: "The record has been successfully created.",
  })
  async create(@Body() user: UserDto, @Res() response: Response) {
    const createdUser = await this.CreateUserUseCase.execute(user);
    return response.status(HttpStatus.CREATED).json(createdUser);
  }

  @Patch(":id")
  @ApiNotFoundResponse({ description: "User not found." })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ type: UserDto, status: HttpStatus.OK })
  async update(@Param("id") id: string, @Body() user: UpdateUserDto) {
    return await this.UpdateUserUseCase.execute(id, user);
  }

  @Delete(":id")
  @ApiNotFoundResponse({ description: "User not found." })
  @ApiResponse({ description: "User removed", status: HttpStatus.NO_CONTENT })
  async remove(@Param("id") id: string, @Res() response: Response) {
    await this.RemoveUserUseCase.execute(id);
    return response.status(HttpStatus.NO_CONTENT).json();
  }

  @Get(":id")
  @ApiResponse({ type: UserDto, status: HttpStatus.OK })
  @ApiNotFoundResponse({ description: "User not found." })
  async findOne(@Param("id") id: string) {
    return await this.FindOneUserUseCase.execute(id);
  }

  @Get("search/:email")
  @ApiResponse({ type: UserDto, status: HttpStatus.OK })
  @ApiNotFoundResponse({ description: "User not found." })
  async searchByEmail(@Param("email") email: string) {
    return await this.SearchByEmailUserUseCase.execute(email);
  }

  @Get()
  @ApiResponse({ type: UserDto, isArray: true, status: HttpStatus.OK })
  async findAll() {
    return this.FindAllUserUseCase.execute();
  }
}
