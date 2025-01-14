"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentsMapper = void 0;
const Incidents_1 = require("../../../domain/entities/Incidents");
class IncidentsMapper {
    static toDomain(prismaIncident) {
        return new Incidents_1.Incidents(prismaIncident.id, prismaIncident.bikeId, prismaIncident.date, prismaIncident.description, prismaIncident.isResolved);
    }
    static toPrisma(domainIncident) {
        return {
            id: domainIncident.id,
            bikeId: domainIncident.bikeId,
            date: domainIncident.date,
            description: domainIncident.description,
            isResolved: domainIncident.isResolved,
        };
    }
}
exports.IncidentsMapper = IncidentsMapper;
