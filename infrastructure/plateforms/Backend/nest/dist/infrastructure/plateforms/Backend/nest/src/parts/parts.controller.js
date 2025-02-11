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
exports.PartsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const express_1 = require("express");
const CreatePartUseCase_1 = require("../../../../../../application/useCases/parts/CreatePartUseCase");
const RemovePartUseCase_1 = require("../../../../../../application/useCases/parts/RemovePartUseCase");
const UpdatePartUseCase_1 = require("../../../../../../application/useCases/parts/UpdatePartUseCase");
const FindOnePartUseCase_1 = require("../../../../../../application/useCases/parts/FindOnePartUseCase");
const FindAllPartUseCase_1 = require("../../../../../../application/useCases/parts/FindAllPartUseCase");
const SearchByReferenceUseCase_1 = require("../../../../../../application/useCases/Parts/SearchByReferenceUseCase");
const PartDto_1 = require("./PartDto");
let PartsController = class PartsController {
    constructor(CreatePartUseCase, RemovePartUseCase, UpdatePartUseCase, FindOnePartUseCase, FindAllPartUseCase, SearchByReferenceUseCase) {
        this.CreatePartUseCase = CreatePartUseCase;
        this.RemovePartUseCase = RemovePartUseCase;
        this.UpdatePartUseCase = UpdatePartUseCase;
        this.FindOnePartUseCase = FindOnePartUseCase;
        this.FindAllPartUseCase = FindAllPartUseCase;
        this.SearchByReferenceUseCase = SearchByReferenceUseCase;
    }
    async create(part, response) {
        const createdPart = await this.CreatePartUseCase.execute(part);
        return response.status(common_1.HttpStatus.CREATED).json(createdPart);
    }
    async update(identifier, part) {
        return await this.UpdatePartUseCase.execute(identifier, part);
    }
    async remove(identifier, response) {
        await this.RemovePartUseCase.execute(identifier);
        return response.status(common_1.HttpStatus.NO_CONTENT).json();
    }
    async findOne(identifier) {
        return await this.FindOnePartUseCase.execute(identifier);
    }
    async findAll() {
        return await this.FindAllPartUseCase.execute();
    }
    async searchByReference(reference) {
        return await this.SearchByReferenceUseCase.execute(reference);
    }
};
exports.PartsController = PartsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiProperty)({ type: PartDto_1.PartDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "The record has been successfully created.",
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PartDto_1.PartDto, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], PartsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Part not found." }),
    (0, swagger_1.ApiBody)({ type: PartDto_1.UpdatePartDto }),
    (0, swagger_1.ApiResponse)({ type: PartDto_1.PartDto, status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, PartDto_1.UpdatePartDto]),
    __metadata("design:returntype", Promise)
], PartsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Part not found." }),
    (0, swagger_1.ApiResponse)({ description: "Part removed", status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], PartsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Part not found." }),
    (0, swagger_1.ApiResponse)({ type: PartDto_1.PartDto, status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PartsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ type: PartDto_1.PartDto, status: common_1.HttpStatus.OK }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PartsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("searchByReference/:reference"),
    (0, swagger_1.ApiResponse)({ type: PartDto_1.PartDto, status: common_1.HttpStatus.OK, isArray: true }),
    __param(0, (0, common_1.Param)("reference")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PartsController.prototype, "searchByReference", null);
exports.PartsController = PartsController = __decorate([
    (0, common_1.Controller)("parts"),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [CreatePartUseCase_1.default,
        RemovePartUseCase_1.default,
        UpdatePartUseCase_1.default,
        FindOnePartUseCase_1.default,
        FindAllPartUseCase_1.default,
        SearchByReferenceUseCase_1.default])
], PartsController);
//# sourceMappingURL=parts.controller.js.map