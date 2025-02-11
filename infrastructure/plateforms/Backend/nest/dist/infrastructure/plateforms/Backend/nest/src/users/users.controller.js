"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const CreateUserUseCase_1 = require("../../../../../../application/useCases/users/CreateUserUseCase");
const RemoveUserUseCase_1 = require("../../../../../../application/useCases/users/RemoveUserUseCase");
const UpdateUserUseCase_1 = require("../../../../../../application/useCases/users/UpdateUserUseCase");
const FindUserUseCase_1 = require("../../../../../../application/useCases/users/FindUserUseCase");
const FindAllUsersUseCase_1 = require("../../../../../../application/useCases/users/FindAllUsersUseCase");
const FindUserByEmailUseCase_1 = require("../../../../../../application/useCases/users/FindUserByEmailUseCase");
const swagger_1 = require("@nestjs/swagger");
const UserDto_1 = require("./UserDto");
let UsersController = class UsersController {
    constructor(CreateUserUseCase, RemoveUserUseCase, UpdateUserUseCase, FindOneUserUseCase, FindAllUserUseCase, SearchByEmailUserUseCase) {
        this.CreateUserUseCase = CreateUserUseCase;
        this.RemoveUserUseCase = RemoveUserUseCase;
        this.UpdateUserUseCase = UpdateUserUseCase;
        this.FindOneUserUseCase = FindOneUserUseCase;
        this.FindAllUserUseCase = FindAllUserUseCase;
        this.SearchByEmailUserUseCase = SearchByEmailUserUseCase;
    }
    async create(user, response) {
        const createdUser = await this.CreateUserUseCase.execute(user);
        return response.status(common_1.HttpStatus.CREATED).json(createdUser);
    }
    async update(id, user) {
        return await this.UpdateUserUseCase.execute(id, user);
    }
    async remove(id, response) {
        await this.RemoveUserUseCase.execute(id);
        return response.status(common_1.HttpStatus.NO_CONTENT).json();
    }
    async findOne(id) {
        return await this.FindOneUserUseCase.execute(id);
    }
    async searchByEmail(email) {
        return await this.SearchByEmailUserUseCase.execute(email);
    }
    async findAll() {
        return this.FindAllUserUseCase.execute();
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiProperty)({ type: UserDto_1.UserDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "The record has been successfully created.",
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDto_1.UserDto, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiNotFoundResponse)({ description: "User not found." }),
    (0, swagger_1.ApiBody)({ type: UserDto_1.UpdateUserDto }),
    (0, swagger_1.ApiResponse)({ type: UserDto_1.UserDto, status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UserDto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiNotFoundResponse)({ description: "User not found." }),
    (0, swagger_1.ApiResponse)({ description: "User removed", status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiResponse)({ type: UserDto_1.UserDto, status: common_1.HttpStatus.OK }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "User not found." }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)("search/:email"),
    (0, swagger_1.ApiResponse)({ type: UserDto_1.UserDto, status: common_1.HttpStatus.OK }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "User not found." }),
    __param(0, (0, common_1.Param)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "searchByEmail", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ type: UserDto_1.UserDto, isArray: true, status: common_1.HttpStatus.OK }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)("users"),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [CreateUserUseCase_1.default,
        RemoveUserUseCase_1.default,
        UpdateUserUseCase_1.default,
        FindUserUseCase_1.default,
        FindAllUsersUseCase_1.default,
        FindUserByEmailUseCase_1.default])
], UsersController);
//# sourceMappingURL=users.controller.js.map