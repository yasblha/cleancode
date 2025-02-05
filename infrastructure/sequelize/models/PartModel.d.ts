import { Model } from 'sequelize';
declare class PartModel extends Model {
    id: string;
    name: string;
    description: string;
    stockQuantity: number;
    minStockLevel: number;
    price: number;
    readonly createdAt: Date;
    readonly updatedAt: Date | null;
}
export default PartModel;
