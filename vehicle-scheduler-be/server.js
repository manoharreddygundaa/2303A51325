const express = require("express");

const app = express();

app.use(express.json());

const vehicleRoutes = require("./routes/vehicleRoutes");

app.use("/api", vehicleRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});