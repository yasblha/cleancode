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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const express_1 = require("express");
const CreateIncidentUseCase_1 = require("../../../../../../application/useCases/incidents/CreateIncidentUseCase");
const RemoveIncidentUseCase_1 = require("../../../../../../application/useCases/incidents/RemoveIncidentUseCase");
const UpdateIncidentUseCase_1 = require("../../../../../../application/useCases/incidents/UpdateIncidentUseCase");
const FindOneIncidentUseCase_1 = require("../../../../../../application/useCases/incidents/FindOneIncidentUseCase");
const FindAllIncidentUseCase_1 = require("../../../../../../application/useCases/incidents/FindAllIncidentUseCase");
const SearchByBikeUseCase_1 = require("../../../../../../application/useCases/incidents/SearchByBikeUseCase");
const IncidentDto_1 = require("./IncidentDto");
let IncidentsController = class IncidentsController {
    constructor(CreateIncidentUseCase, RemoveIncidentUseCase, UpdateIncidentUseCase, FindOneIncidentUseCase, FindAllIncidentUseCase, SearchByBikeUseCase) {
        this.CreateIncidentUseCase = CreateIncidentUseCase;
        this.RemoveIncidentUseCase = RemoveIncidentUseCase;
        this.UpdateIncidentUseCase = UpdateIncidentUseCase;
        this.FindOneIncidentUseCase = FindOneIncidentUseCase;
        this.FindAllIncidentUseCase = FindAllIncidentUseCase;
        this.SearchByBikeUseCase = SearchByBikeUseCase;
    }
    async create(incident, response) {
        const createdIncident = await this.CreateIncidentUseCase.execute(incident);
        return response.status(common_1.HttpStatus.CREATED).json(createdIncident);
    }
    async update(identifier, incident) {
        return await this.UpdateIncidentUseCase.execute(identifier, incident);
    }
    async remove(identifier, response) {
        await this.RemoveIncidentUseCase.execute(identifier);
        return response.status(common_1.HttpStatus.NO_CONTENT).json();
    }
    async findOne(identifier, response) {
        return await this.FindOneIncidentUseCase.execute(identifier);
    }
    async findAll() {
        return this.FindAllIncidentUseCase.execute();
    }
    async searchByBike(vin) {
        return this.SearchByBikeUseCase.execute(vin);
    }
};
exports.IncidentsController = IncidentsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiProperty)({ type: IncidentDto_1.IncidentDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "The record has been successfully created.",
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [IncidentDto_1.IncidentDto, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], IncidentsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Incident not found." }),
    (0, swagger_1.ApiBody)({ type: IncidentDto_1.UpdateIncidentDto }),
    (0, swagger_1.ApiResponse)({ type: IncidentDto_1.IncidentDto, status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, IncidentDto_1.UpdateIncidentDto]),
    __metadata("design:returntype", Promise)
], IncidentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Incident not found." }),
    (0, swagger_1.ApiResponse)({
        description: "Incident removed",
        status: common_1.HttpStatus.NO_CONTENT,
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], IncidentsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiResponse)({ type: IncidentDto_1.IncidentDto, status: common_1.HttpStatus.OK }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Incident not found." }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], IncidentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ type: IncidentDto_1.IncidentDto, status: common_1.HttpStatus.OK, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IncidentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("searchByBike/:vin"),
    (0, swagger_1.ApiResponse)({ type: IncidentDto_1.IncidentDto, status: common_1.HttpStatus.OK, isArray: true }),
    __param(0, (0, common_1.Param)("vin")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IncidentsController.prototype, "searchByBike", null);
exports.IncidentsController = IncidentsController = __decorate([
    (0, common_1.Controller)("incidents"),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [CreateIncidentUseCase_1.default,
        RemoveIncidentUseCase_1.default,
        UpdateIncidentUseCase_1.default,
        FindOneIncidentUseCase_1.default,
        FindAllIncidentUseCase_1.default,
        SearchByBikeUseCase_1.default])
], IncidentsController);
//# sourceMappingURL=incidents.controller.js.map