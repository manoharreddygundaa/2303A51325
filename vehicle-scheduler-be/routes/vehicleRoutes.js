const express = require("express");
const router = express.Router();

const {
    getOptimalVehicles
} = require("../controllers/vehicleController");

router.get("/schedule", getOptimalVehicles);

module.exports = router;