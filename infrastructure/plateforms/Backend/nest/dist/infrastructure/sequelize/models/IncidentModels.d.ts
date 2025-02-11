import { Model, Optional } from "sequelize";
interface IncidentAttributes {
    id: number;
    bikeId: number;
    date: Date;
    description: string;
    isResolved: boolean;
}
type IncidentCreationAttributes = Optional<IncidentAttributes, "id">;
declare class IncidentModel extends Model<IncidentAttributes, IncidentCreationAttributes> implements IncidentAttributes {
    id: number;
    bikeId: number;
    date: Date;
    description: string;
    isResolved: boolean;
    static associate(models: any): void;
}
export default IncidentModel;
