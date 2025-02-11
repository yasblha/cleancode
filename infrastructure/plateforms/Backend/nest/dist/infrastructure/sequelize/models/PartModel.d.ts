import { Model, Optional } from "sequelize";
interface PartAttributes {
    id: number;
    name: string;
    description: string;
    reference: string;
    stockQuantity: number;
    minStockLevel: number;
    price: number;
    createdAt: Date;
    updatedAt: Date | null;
}
type PartCreationAttributes = Optional<PartAttributes, "id" | "createdAt" | "updatedAt">;
declare class PartModel extends Model<PartAttributes, PartCreationAttributes> implements PartAttributes {
    id: number;
    name: string;
    description: string;
    reference: string;
    stockQuantity: number;
    minStockLevel: number;
    price: number;
    readonly createdAt: Date;
    readonly updatedAt: Date | null;
    static associate(models: any): void;
}
export default PartModel;
