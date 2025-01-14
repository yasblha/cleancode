import { Incident as PrismaIncident } from '@prisma/client';
import { Incidents } from '../../../domain/entities/Incidents';

export class IncidentsMapper {
    static toDomain(prismaIncident: PrismaIncident): Incidents {
        return new Incidents(
            prismaIncident.id,
            prismaIncident.bikeId,
            prismaIncident.date,
            prismaIncident.description,
            prismaIncident.isResolved,
        );
    }

    static toPrisma(domainIncident: Incidents): PrismaIncident {
        return {
            id: domainIncident.id,
            bikeId: domainIncident.bikeId,
            date: domainIncident.date,
            description: domainIncident.description,
            isResolved: domainIncident.isResolved,
        };
    }
}