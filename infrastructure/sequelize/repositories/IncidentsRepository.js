"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeIncidentsRepository = void 0;
const IncidentModels_1 = require("@infrastructure/sequelize/models/IncidentModels");
class SequelizeIncidentsRepository {
    async create(incident) {
        const newIncident = await IncidentModels_1.default.create(incident);
        return newIncident.toJSON();
    }
    async findAll() {
        const incidents = await IncidentModels_1.default.findAll();
        return incidents.map(incident => incident.toJSON());
    }
    async findOne(id) {
        const incident = await IncidentModels_1.default.findByPk(id);
        return incident ? incident.toJSON() : null;
    }
    async update(id, incident) {
        const [affectedCount] = await IncidentModels_1.default.update(incident, { where: { id } });
        if (affectedCount > 0) {
            const updatedIncident = await IncidentModels_1.default.findByPk(id);
            return updatedIncident ? updatedIncident.toJSON() : null;
        }
        return null;
    }
    async remove(id) {
        const affectedCount = await IncidentModels_1.default.destroy({ where: { id } });
        return affectedCount > 0;
    }
    async findByBikeId(bikeId) {
        const incidents = await IncidentModels_1.default.findAll({ where: { bikeId } });
        return incidents.map(incident => incident.toJSON());
    }
}
exports.SequelizeIncidentsRepository = SequelizeIncidentsRepository;
//# sourceMappingURL=IncidentsRepository.js.map