const schedulerService = require("../services/schedulerService");

const getOptimalVehicles = async (req, res) => {
    try {
        const result = await schedulerService.scheduleVehicles();

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getOptimalVehicles
};