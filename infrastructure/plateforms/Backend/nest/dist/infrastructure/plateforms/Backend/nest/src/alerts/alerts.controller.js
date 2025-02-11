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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertsController = void 0;
const common_1 = require("@nestjs/common");
const FindOneAlertUseCase_1 = require("../../../../../../application/useCases/alerts/FindOneAlertUseCase");
const FindAllAlertUseCase_1 = require("../../../../../../application/useCases/alerts/FindAllAlertUseCase");
const swagger_1 = require("@nestjs/swagger");
const AlertDto_1 = require("./AlertDto");
let AlertsController = class AlertsController {
    constructor(FindOneAlertUseCase, FindAllAlertUseCase) {
        this.FindOneAlertUseCase = FindOneAlertUseCase;
        this.FindAllAlertUseCase = FindAllAlertUseCase;
    }
    async findAll() {
        return await this.FindAllAlertUseCase.execute();
    }
    async findOne(identifier) {
        return await this.FindOneAlertUseCase.execute(identifier);
    }
};
exports.AlertsController = AlertsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ type: AlertDto_1.AlertDto, status: common_1.HttpStatus.OK }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlertsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Alert not found." }),
    (0, swagger_1.ApiResponse)({ type: AlertDto_1.AlertDto, status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlertsController.prototype, "findOne", null);
exports.AlertsController = AlertsController = __decorate([
    (0, common_1.Controller)("alerts"),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [FindOneAlertUseCase_1.default,
        FindAllAlertUseCase_1.default])
], AlertsController);
//# sourceMappingURL=alerts.controller.js.map