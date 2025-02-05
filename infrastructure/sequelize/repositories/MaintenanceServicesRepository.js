"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeMaintenanceServicesRepository = void 0;
const MaintenanceServiceModel_1 = require("../models/MaintenanceServiceModel");
class SequelizeMaintenanceServicesRepository {
    async create(service) {
        const newService = await MaintenanceServiceModel_1.default.create(service);
        return newService.toJSON();
    }
    async findAll() {
        const services = await MaintenanceServiceModel_1.default.findAll();
        return services.map(service => service.toJSON());
    }
    async findOne(id) {
        const service = await MaintenanceServiceModel_1.default.findByPk(id);
        return service ? service.toJSON() : null;
    }
    async update(id, service) {
        const [affectedCount] = await MaintenanceServiceModel_1.default.update(service, { where: { id } });
        if (affectedCount > 0) {
            const updatedService = await MaintenanceServiceModel_1.default.findByPk(id);
            return updatedService ? updatedService.toJSON() : null;
        }
        return null;
    }
    async remove(id) {
        const affectedCount = await MaintenanceServiceModel_1.default.destroy({ where: { id } });
        return affectedCount > 0;
    }
    async findByBikeId(bikeId) {
        const services = await MaintenanceServiceModel_1.default.findAll({ where: { bikeId } });
        return services.map(service => service.toJSON());
    }
    async findByTechnicianId(technicianId) {
        const services = await MaintenanceServiceModel_1.default.findAll({ where: { technicianId } });
        return services.map(service => service.toJSON());
    }
}
exports.SequelizeMaintenanceServicesRepository = SequelizeMaintenanceServicesRepository;
//# sourceMappingURL=MaintenanceServicesRepository.js.map