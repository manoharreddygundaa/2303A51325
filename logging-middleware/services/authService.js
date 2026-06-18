const axios = require("axios");
require("dotenv").config();

async function getAuthToken() {
    try {
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/auth",
            {
                email: process.env.EMAIL,
                name: process.env.NAME,
                roll_no: process.env.ROLL_NO,
                access_code: process.env.ACCESS_CODE,
                client_Id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET
            }
        );

        console.log("Authentication done !...");
        console.log(response.data);

        return response.data.access_token;
    } catch (error) {
        console.error(
            "authentication is failed unfortunatley....",
            error.response?.data || error.message
        );
    }
}

module.exports = getAuthToken;