import { Router } from "express";
import { MaintenanceController } from "../controllers/MaintenanceController";

const router = Router();
const controller = new MaintenanceController();

router.post("/", (req, res) => controller.createMaintenanceService(req, res));
router.get("/", (req, res) => controller.getAllMaintenanceServices(req, res));
router.get("/:id", (req, res) => controller.getMaintenanceService(req, res));
router.put("/:id", (req, res) => controller.updateMaintenanceService(req, res));
router.delete("/:id", (req, res) => controller.removeMaintenanceService(req, res));
router.get("/bike/:bikeId", (req, res) => controller.getMaintenanceServicesByBike(req, res));
router.get("/technician/:technicianId", (req, res) => controller.getMaintenanceServicesByTechnician(req, res));

export default router;
