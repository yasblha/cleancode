"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateMaintenanceServiceUseCase {
    constructor(maintenanceServicesRepository) {
        this.maintenanceServicesRepository = maintenanceServicesRepository;
    }
    async execute(service) {
        return this.maintenanceServicesRepository.create(service);
    }
}
exports.default = CreateMaintenanceServiceUseCase;
//# sourceMappingURL=CreateMaintenanceServiceUseCase.js.map