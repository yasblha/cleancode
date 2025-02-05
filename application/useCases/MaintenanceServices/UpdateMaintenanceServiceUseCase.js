"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateMaintenanceServiceUseCase {
    constructor(maintenanceServicesRepository) {
        this.maintenanceServicesRepository = maintenanceServicesRepository;
    }
    async execute(id, service) {
        return this.maintenanceServicesRepository.update(id, service);
    }
}
exports.default = UpdateMaintenanceServiceUseCase;
//# sourceMappingURL=UpdateMaintenanceServiceUseCase.js.map