import { Request, Response } from "express";
import { SequelizePartsRepository } from "@infrastructure/sequelize/repositories/PartsRepository";
import CreatePartUseCase from "@application/useCases/Parts/CreatePartUseCase";
import FindAllPartsUseCase from "@application/useCases/Parts/FindAllPartsUseCase";
import FindOnePartUseCase from "@application/useCases/Parts/FindOnePartUseCase";
import UpdatePartUseCase from "@application/useCases/Parts/UpdatePartUseCase";
import RemovePartUseCase from "@application/useCases/Parts/RemovePartUseCase";
import FindLowStockPartsUseCase from "@application/useCases/Parts/FindLowStockPartsUseCase";

export class PartsController {
    private createPartUseCase: CreatePartUseCase;
    private findAllPartsUseCase: FindAllPartsUseCase;
    private findOnePartUseCase: FindOnePartUseCase;
    private updatePartUseCase: UpdatePartUseCase;
    private removePartUseCase: RemovePartUseCase;
    private findLowStockPartsUseCase: FindLowStockPartsUseCase;

    constructor() {
        const partsRepository = new SequelizePartsRepository();
        this.createPartUseCase = new CreatePartUseCase(partsRepository);
        this.findAllPartsUseCase = new FindAllPartsUseCase(partsRepository);
        this.findOnePartUseCase = new FindOnePartUseCase(partsRepository);
        this.updatePartUseCase = new UpdatePartUseCase(partsRepository);
        this.removePartUseCase = new RemovePartUseCase(partsRepository);
        this.findLowStockPartsUseCase = new FindLowStockPartsUseCase(partsRepository);
    }

    async createPart(req: Request, res: Response): Promise<void> {
        try {
            const part = await this.createPartUseCase.execute(req.body);
            res.status(201).json(part);
        } catch (error) {
            console.error("Erreur dans PartsController.createPart:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }

    async getParts(req: Request, res: Response): Promise<void> {
        try {
            const parts = await this.findAllPartsUseCase.execute();
            res.json(parts);
        } catch (error) {
            console.error("Erreur dans PartsController.getParts:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }

    async getPart(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const part = await this.findOnePartUseCase.execute(id);
            if (!part) {
                res.status(404).json({ error: "Pièce non trouvée" });
            } else {
                res.json(part);
            }
        } catch (error) {
            console.error("Erreur dans PartsController.getPart:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }

    async updatePart(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const updated = await this.updatePartUseCase.execute(id, req.body);
            if (!updated) {
                res.status(404).json({ error: "Pièce non trouvée" });
            } else {
                res.json(updated);
            }
        } catch (error) {
            console.error("Erreur dans PartsController.updatePart:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }

    async removePart(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const removed = await this.removePartUseCase.execute(id);
            if (!removed) {
                res.status(404).json({ error: "Pièce non trouvée" });
            } else {
                res.status(204).send();
            }
        } catch (error) {
            console.error("Erreur dans PartsController.removePart:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }

    async getLowStockParts(req: Request, res: Response): Promise<void> {
        try {
            const parts = await this.findLowStockPartsUseCase.execute();
            res.json(parts);
        } catch (error) {
            console.error("Erreur dans PartsController.getLowStockParts:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }
}
