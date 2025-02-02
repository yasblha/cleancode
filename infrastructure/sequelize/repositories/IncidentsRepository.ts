
import IncidentModel from '@infrastructure/sequelize/models/IncidentModels';
import { Incidents } from '@domain/entities/Incidents';
import { IncidentsRepository } from '@domain/repositories/IncidentsRepository';

export class SequelizeIncidentsRepository implements IncidentsRepository {
    async create(incident: Incidents): Promise<Incidents> {
        // @ts-ignore
        const newIncident = await IncidentModel.create(incident);
        return newIncident.toJSON() as Incidents;
    }

    async findAll(): Promise<Incidents[]> {
        const incidents = await IncidentModel.findAll();
        return incidents.map(incident => incident.toJSON() as Incidents);
    }

    async findOne(id: string): Promise<Incidents | null> {
        const incident = await IncidentModel.findByPk(id);
        return incident ? incident.toJSON() as Incidents : null;
    }

    async update(id: string, incident: Partial<Incidents>): Promise<Incidents | null> {
        const [affectedCount] = await IncidentModel.update(incident, { where: { id } });
        if (affectedCount > 0) {
            const updatedIncident = await IncidentModel.findByPk(id);
            return updatedIncident ? updatedIncident.toJSON() as Incidents : null;
        }
        return null;
    }

    async remove(id: string): Promise<boolean> {
        const affectedCount = await IncidentModel.destroy({ where: { id } });
        return affectedCount > 0;
    }

    async findByBikeId(bikeId: string): Promise<Incidents[]> {
        const incidents = await IncidentModel.findAll({ where: { bikeId } });
        return incidents.map(incident => incident.toJSON() as Incidents);
    }
}