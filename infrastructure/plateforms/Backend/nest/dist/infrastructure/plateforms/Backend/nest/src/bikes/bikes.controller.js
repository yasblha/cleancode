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
exports.BikesController = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const Vinidentifier_1 = require("../../../../../../domain/value-objects/Vinidentifier");
const CreateBikeUseCase_1 = require("../../../../../../application/useCases/bikes/CreateBikeUseCase");
const RemoveBikeUseCase_1 = require("../../../../../../application/useCases/bikes/RemoveBikeUseCase");
const UpdateBikeUseCase_1 = require("../../../../../../application/useCases/bikes/UpdateBikeUseCase");
const FindOneBikeUseCase_1 = require("../../../../../../application/useCases/bikes/FindOneBikeUseCase");
const FindAllBikeUseCase_1 = require("../../../../../../application/useCases/bikes/FindAllBikeUseCase");
const swagger_1 = require("@nestjs/swagger");
const BikeDto_1 = require("./BikeDto");
let BikesController = class BikesController {
    constructor(CreateBikeUseCase, RemoveBikeUseCase, UpdateBikeUseCase, FindOneBikeUseCase, FindAllBikeUseCase) {
        this.CreateBikeUseCase = CreateBikeUseCase;
        this.RemoveBikeUseCase = RemoveBikeUseCase;
        this.UpdateBikeUseCase = UpdateBikeUseCase;
        this.FindOneBikeUseCase = FindOneBikeUseCase;
        this.FindAllBikeUseCase = FindAllBikeUseCase;
    }
    async create(bike, response) {
        const createdBike = await this.CreateBikeUseCase.execute(bike);
        return response.status(common_1.HttpStatus.CREATED).json(createdBike);
    }
    async update(identifier, bike) {
        const vin = new Vinidentifier_1.default(identifier);
        return await this.UpdateBikeUseCase.execute(vin, bike);
    }
    async remove(identifier, response) {
        const vin = new Vinidentifier_1.default(identifier);
        await this.RemoveBikeUseCase.execute(vin);
        return response.status(common_1.HttpStatus.NO_CONTENT).json();
    }
    async findOne(identifier) {
        const vin = new Vinidentifier_1.default(identifier);
        return await this.FindOneBikeUseCase.execute(vin);
    }
    async findAll() {
        return this.FindAllBikeUseCase.execute();
    }
};
exports.BikesController = BikesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiProperty)({ type: BikeDto_1.BikeDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "The record has been successfully created.",
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BikeDto_1.BikeDto, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], BikesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Bike not found." }),
    (0, swagger_1.ApiBody)({ type: BikeDto_1.UpdateBikeDto }),
    (0, swagger_1.ApiResponse)({ type: BikeDto_1.BikeDto, status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, BikeDto_1.UpdateBikeDto]),
    __metadata("design:returntype", Promise)
], BikesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Bike not found." }),
    (0, swagger_1.ApiResponse)({ description: "Bike removed", status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], BikesController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiResponse)({ type: BikeDto_1.BikeDto, status: common_1.HttpStatus.OK }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Bike not found." }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BikesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ type: BikeDto_1.BikeDto, isArray: true, status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BikesController.prototype, "findAll", null);
exports.BikesController = BikesController = __decorate([
    (0, common_1.Controller)("bikes"),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [CreateBikeUseCase_1.default,
        RemoveBikeUseCase_1.default,
        UpdateBikeUseCase_1.default,
        FindOneBikeUseCase_1.default,
        FindAllBikeUseCase_1.default])
], BikesController);
//# sourceMappingURL=bikes.controller.js.map