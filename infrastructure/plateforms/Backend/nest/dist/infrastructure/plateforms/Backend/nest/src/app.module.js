"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const bikes_module_1 = require("./bikes/bikes.module");
const users_module_1 = require("./users/users.module");
const incidents_module_1 = require("./incidents/incidents.module");
const companies_module_1 = require("./company/companies.module");
const alerts_module_1 = require("./alerts/alerts.module");
const parts_module_1 = require("./parts/parts.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bikes_module_1.BikesModule,
            users_module_1.UsersModule,
            incidents_module_1.IncidentsModule,
            parts_module_1.PartsModule,
            companies_module_1.CompaniesModule,
            alerts_module_1.AlertsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map