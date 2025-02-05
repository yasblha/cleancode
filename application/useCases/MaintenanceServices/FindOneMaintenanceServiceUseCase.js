"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindOneMaintenanceServiceUseCase {
    constructor(maintenanceServicesRepository) {
        this.maintenanceServicesRepository = maintenanceServicesRepository;
    }
    async execute(id) {
        return this.maintenanceServicesRepository.findOne(id);
    }
}
exports.default = FindOneMaintenanceServiceUseCase;
//# sourceMappingURL=FindOneMaintenanceServiceUseCase.js.map