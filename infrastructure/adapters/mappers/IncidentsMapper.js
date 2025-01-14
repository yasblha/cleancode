import { Incidents } from '../../../domain/entities/Incidents';
export class IncidentsMapper {
    static toDomain(prismaIncident) {
        return new Incidents(prismaIncident.id, prismaIncident.bikeId, prismaIncident.date, prismaIncident.description, prismaIncident.isResolved);
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
