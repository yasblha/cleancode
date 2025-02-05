"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemoveMaintenanceServiceUseCase {
    constructor(maintenanceServicesRepository) {
        this.maintenanceServicesRepository = maintenanceServicesRepository;
    }
    async execute(id) {
        return this.maintenanceServicesRepository.remove(id);
    }
}
exports.default = RemoveMaintenanceServiceUseCase;
//# sourceMappingURL=RemoveMaintenanceServiceUseCase.js.map