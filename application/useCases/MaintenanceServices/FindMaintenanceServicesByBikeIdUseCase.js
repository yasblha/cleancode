"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindMaintenanceServicesByBikeIdUseCase {
    constructor(maintenanceServicesRepository) {
        this.maintenanceServicesRepository = maintenanceServicesRepository;
    }
    async execute(bikeId) {
        return this.maintenanceServicesRepository.findByBikeId(bikeId);
    }
}
exports.default = FindMaintenanceServicesByBikeIdUseCase;
//# sourceMappingURL=FindMaintenanceServicesByBikeIdUseCase.js.map