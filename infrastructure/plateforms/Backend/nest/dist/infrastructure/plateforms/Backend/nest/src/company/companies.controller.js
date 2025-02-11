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
exports.CompanyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const express_1 = require("express");
const CreateCompanyUseCase_1 = require("../../../../../../application/useCases/companies/CreateCompanyUseCase");
const RemoveCompanyUseCase_1 = require("../../../../../../application/useCases/companies/RemoveCompanyUseCase");
const UpdateCompanyUseCase_1 = require("../../../../../../application/useCases/companies/UpdateCompanyUseCase");
const FindOneCompanyUseCase_1 = require("../../../../../../application/useCases/companies/FindOneCompanyUseCase");
const FindAllCompanyUseCase_1 = require("../../../../../../application/useCases/companies/FindAllCompanyUseCase");
const SearchByNameUseCase_1 = require("../../../../../../application/useCases/companies/SearchByNameUseCase");
const CompanyDto_1 = require("./CompanyDto");
let CompanyController = class CompanyController {
    constructor(CreateCompanyUseCase, RemoveCompanyUseCase, UpdateCompanyUseCase, FindOneCompanyUseCase, FindAllCompanyUseCase, SearchByNameUseCase) {
        this.CreateCompanyUseCase = CreateCompanyUseCase;
        this.RemoveCompanyUseCase = RemoveCompanyUseCase;
        this.UpdateCompanyUseCase = UpdateCompanyUseCase;
        this.FindOneCompanyUseCase = FindOneCompanyUseCase;
        this.FindAllCompanyUseCase = FindAllCompanyUseCase;
        this.SearchByNameUseCase = SearchByNameUseCase;
    }
    async create(company, response) {
        const createdCompany = await this.CreateCompanyUseCase.execute(company);
        return response.status(common_1.HttpStatus.CREATED).json(createdCompany);
    }
    async update(identifier, company) {
        return await this.UpdateCompanyUseCase.execute(identifier, company);
    }
    async remove(identifier, response) {
        await this.RemoveCompanyUseCase.execute(identifier);
        return response.status(common_1.HttpStatus.NO_CONTENT).json();
    }
    async findAll() {
        return await this.FindAllCompanyUseCase.execute();
    }
    async findOne(identifier) {
        return await this.FindOneCompanyUseCase.execute(identifier);
    }
    async searchByName(name) {
        return await this.SearchByNameUseCase.execute(name);
    }
};
exports.CompanyController = CompanyController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiProperty)({ type: CompanyDto_1.CompanyDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "The record has been successfully created.",
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CompanyDto_1.CompanyDto, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Company not found." }),
    (0, swagger_1.ApiBody)({ type: CompanyDto_1.UpdateCompanyDto }),
    (0, swagger_1.ApiResponse)({ type: CompanyDto_1.CompanyDto, status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CompanyDto_1.UpdateCompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Company not found." }),
    (0, swagger_1.ApiResponse)({
        description: "Company removed",
        status: common_1.HttpStatus.NO_CONTENT,
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ type: CompanyDto_1.CompanyDto, status: common_1.HttpStatus.OK }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Company not found." }),
    (0, swagger_1.ApiResponse)({ type: CompanyDto_1.CompanyDto, status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)("searchByName/:name"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "searchByName", null);
exports.CompanyController = CompanyController = __decorate([
    (0, common_1.Controller)("companies"),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [CreateCompanyUseCase_1.default,
        RemoveCompanyUseCase_1.default,
        UpdateCompanyUseCase_1.default,
        FindOneCompanyUseCase_1.default,
        FindAllCompanyUseCase_1.default,
        SearchByNameUseCase_1.default])
], CompanyController);
//# sourceMappingURL=companies.controller.js.map