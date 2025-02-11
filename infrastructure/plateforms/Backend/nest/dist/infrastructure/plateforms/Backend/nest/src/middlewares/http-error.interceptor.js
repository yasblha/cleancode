"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatchEverythingFilter = void 0;
const NotFoundError_1 = require("../../../../../../domain/errors/NotFoundError");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
const sequelize_2 = require("sequelize");
let CatchEverythingFilter = class CatchEverythingFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        console.log(exception);
        if (exception instanceof sequelize_1.ForeignKeyConstraintError) {
            response.status(common_1.HttpStatus.BAD_REQUEST).json(exception.name);
        }
        else if (exception instanceof sequelize_1.UniqueConstraintError) {
            response.status(common_1.HttpStatus.CONFLICT).json(exception.name);
        }
        else if (exception instanceof sequelize_2.ValidationError) {
            response.status(common_1.HttpStatus.BAD_REQUEST).json(exception.message);
        }
        else if (exception instanceof NotFoundError_1.default) {
            response.status(common_1.HttpStatus.NOT_FOUND).json(exception.name);
        }
        else {
            const httpStatus = exception instanceof common_1.HttpException
                ? exception.getStatus()
                : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            response.status(httpStatus).json(exception.message);
        }
    }
};
exports.CatchEverythingFilter = CatchEverythingFilter;
exports.CatchEverythingFilter = CatchEverythingFilter = __decorate([
    (0, common_1.Catch)()
], CatchEverythingFilter);
//# sourceMappingURL=http-error.interceptor.js.map