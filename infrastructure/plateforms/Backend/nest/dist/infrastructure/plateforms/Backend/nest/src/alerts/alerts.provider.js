"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllAlertUseCaseProvider = exports.FindOneAlertUseCaseProvider = exports.UpdateAlertUseCaseProvider = exports.CreateAlertUseCaseProvider = void 0;
const CreateAlertUseCase_1 = require("../../../../../../application/useCases/alerts/CreateAlertUseCase");
const UpdateAlertUseCase_1 = require("../../../../../../application/useCases/alerts/UpdateAlertUseCase");
const FindOneAlertUseCase_1 = require("../../../../../../application/useCases/alerts/FindOneAlertUseCase");
const FindAllAlertUseCase_1 = require("../../../../../../application/useCases/alerts/FindAllAlertUseCase");
const Alert_1 = require("../../../../../mongo/repositories/Alert");
exports.CreateAlertUseCaseProvider = {
    provide: CreateAlertUseCase_1.default,
    useFactory: (alertRepository) => new CreateAlertUseCase_1.default(alertRepository),
    inject: [Alert_1.default],
};
exports.UpdateAlertUseCaseProvider = {
    provide: UpdateAlertUseCase_1.default,
    useFactory: (alertRepository) => new UpdateAlertUseCase_1.default(alertRepository),
    inject: [Alert_1.default],
};
exports.FindOneAlertUseCaseProvider = {
    provide: FindOneAlertUseCase_1.default,
    useFactory: (alertRepository) => new FindOneAlertUseCase_1.default(alertRepository),
    inject: [Alert_1.default],
};
exports.FindAllAlertUseCaseProvider = {
    provide: FindAllAlertUseCase_1.default,
    useFactory: (alertRepository) => new FindAllAlertUseCase_1.default(alertRepository),
    inject: [Alert_1.default],
};
exports.default = [
    exports.CreateAlertUseCaseProvider,
    exports.UpdateAlertUseCaseProvider,
    exports.FindOneAlertUseCaseProvider,
    exports.FindAllAlertUseCaseProvider,
];
//# sourceMappingURL=alerts.provider.js.map