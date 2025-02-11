import PartModel from "../models/PartModel";
import { Parts } from "@domain/entities/Parts";
import { PartsRepository } from "@domain/repositories/PartsRepository";
import { Op, col } from "sequelize";

export class SequelizePartsRepository implements PartsRepository {
    async create(part: Omit<Parts, "id"> & { reference: string }): Promise<Parts> {
        const newPart = await PartModel.create({ ...part });
        return newPart.toJSON() as Parts;
    }

    async findAll(): Promise<Parts[]> {
        const parts = await PartModel.findAll();
        return parts.map((part) => part.toJSON() as Parts);
    }

    async findOne(id: string): Promise<Parts | null> {
        const part = await PartModel.findByPk(id);
        return part ? (part.toJSON() as Parts) : null;
    }

    async update(id: string, part: Partial<Parts>): Promise<Parts | null> {
        const [affectedCount] = await PartModel.update(part, { where: { id } });
        if (affectedCount > 0) {
            const updatedPart = await PartModel.findByPk(id);
            return updatedPart ? (updatedPart.toJSON() as Parts) : null;
        }
        return null;
    }

    async remove(id: string): Promise<boolean> {
        const affectedCount = await PartModel.destroy({ where: { id } });
        return affectedCount > 0;
    }

    async findLowStockParts(): Promise<Parts[]> {
        const parts = await PartModel.findAll({
            where: { stockQuantity: { [Op.lt]: col("minStockLevel") } },
        });
        return parts.map((part) => part.toJSON() as Parts);
    }

    async searchByReference(reference: string): Promise<Parts[]> {
        const parts = await PartModel.findAll({
            where: {
                reference: {
                    [Op.like]: `%${reference}%`,
                },
            },
        });
        return parts.map((part) => part.toJSON() as Parts);
    }
}
