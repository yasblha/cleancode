import { Router } from "express";
import { BikeController } from "../controllers/BikeController";

const router = Router();
const bikeController = new BikeController();

router.get("/", (req, res) => {
    bikeController.getBikes(req, res);
});

export default router;