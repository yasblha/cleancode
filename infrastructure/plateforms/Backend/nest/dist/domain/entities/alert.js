"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PartNotFoundError_1 = require("../errors/parts/PartNotFoundError");
class Alert {
    constructor(title, description, part, identifier) {
        this.title = title;
        this.description = description;
        this.part = part;
        this.identifier = identifier;
    }
    static async fromMongoModel(mongoAlert, partRepository, _includeRelations = true) {
        return new Alert(mongoAlert.title, mongoAlert.description, mongoAlert.part
            ? await this.findPart(mongoAlert.part, partRepository)
            : mongoAlert.part, mongoAlert.identifier);
    }
    static async findPart(partIdentifier, partRepository) {
        const part = await partRepository.findOne(partIdentifier);
        if (!part) {
            throw new PartNotFoundError_1.default(`Part with identifier ${partIdentifier} not found`);
        }
        return part;
    }
}
exports.default = Alert;
//# sourceMappingURL=alert.js.map