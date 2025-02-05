"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindAllMaintenanceServicesUseCase {
    constructor(maintenanceServicesRepository) {
        this.maintenanceServicesRepository = maintenanceServicesRepository;
    }
    async execute() {
        return this.maintenanceServicesRepository.findAll();
    }
}
exports.default = FindAllMaintenanceServicesUseCase;
//# sourceMappingURL=FindAllMaintenanceServicesUseCase.js.map