"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeIncidentsRepository = void 0;
const IncidentModels_1 = __importDefault(require("@infrastructure/sequelize/models/IncidentModels"));
class SequelizeIncidentsRepository {
    create(incident) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            const newIncident = yield IncidentModels_1.default.create(incident);
            return newIncident.toJSON();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const incidents = yield IncidentModels_1.default.findAll();
            return incidents.map(incident => incident.toJSON());
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const incident = yield IncidentModels_1.default.findByPk(id);
            return incident ? incident.toJSON() : null;
        });
    }
    update(id, incident) {
        return __awaiter(this, void 0, void 0, function* () {
            const [affectedCount] = yield IncidentModels_1.default.update(incident, { where: { id } });
            if (affectedCount > 0) {
                const updatedIncident = yield IncidentModels_1.default.findByPk(id);
                return updatedIncident ? updatedIncident.toJSON() : null;
            }
            return null;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const affectedCount = yield IncidentModels_1.default.destroy({ where: { id } });
            return affectedCount > 0;
        });
    }
    findByBikeId(bikeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const incidents = yield IncidentModels_1.default.findAll({ where: { bikeId } });
            return incidents.map(incident => incident.toJSON());
        });
    }
}
exports.SequelizeIncidentsRepository = SequelizeIncidentsRepository;
