"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BikeController_1 = require("../controllers/BikeController");
const router = (0, express_1.Router)();
const bikeController = new BikeController_1.BikeController();
router.get("/", (req, res) => {
    bikeController.getBikes(req, res);
});
exports.default = router;
//# sourceMappingURL=bike.routes.js.map