"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindMaintenanceServicesByTechnicianIdUseCase {
    constructor(maintenanceServicesRepository) {
        this.maintenanceServicesRepository = maintenanceServicesRepository;
    }
    async execute(technicianId) {
        return this.maintenanceServicesRepository.findByTechnicianId(technicianId);
    }
}
exports.default = FindMaintenanceServicesByTechnicianIdUseCase;
//# sourceMappingURL=FindMaintenanceServicesByTechnicianIdUseCase.js.map