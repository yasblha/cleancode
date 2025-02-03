"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeMaintenanceServicesRepository = void 0;
const MaintenanceServiceModel_1 = __importDefault(require("../models/MaintenanceServiceModel"));
class SequelizeMaintenanceServicesRepository {
    create(service) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            const newService = yield MaintenanceServiceModel_1.default.create(service);
            return newService.toJSON();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const services = yield MaintenanceServiceModel_1.default.findAll();
            return services.map(service => service.toJSON());
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = yield MaintenanceServiceModel_1.default.findByPk(id);
            return service ? service.toJSON() : null;
        });
    }
    update(id, service) {
        return __awaiter(this, void 0, void 0, function* () {
            const [affectedCount] = yield MaintenanceServiceModel_1.default.update(service, { where: { id } });
            if (affectedCount > 0) {
                const updatedService = yield MaintenanceServiceModel_1.default.findByPk(id);
                return updatedService ? updatedService.toJSON() : null;
            }
            return null;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const affectedCount = yield MaintenanceServiceModel_1.default.destroy({ where: { id } });
            return affectedCount > 0;
        });
    }
    findByBikeId(bikeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const services = yield MaintenanceServiceModel_1.default.findAll({ where: { bikeId } });
            return services.map(service => service.toJSON());
        });
    }
    findByTechnicianId(technicianId) {
        return __awaiter(this, void 0, void 0, function* () {
            const services = yield MaintenanceServiceModel_1.default.findAll({ where: { technicianId } });
            return services.map(service => service.toJSON());
        });
    }
}
exports.SequelizeMaintenanceServicesRepository = SequelizeMaintenanceServicesRepository;
//# sourceMappingURL=MaintenanceServicesRepository.js.map