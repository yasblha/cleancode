import { Model } from 'sequelize';
declare class IncidentModel extends Model {
    id: string;
    bikeId: string;
    date: Date;
    description: string;
    isResolved: boolean;
}
export default IncidentModel;
