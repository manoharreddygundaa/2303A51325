require('dotenv').config();
const axios = require('axios');

async function register() {
    try {
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/register",
            {
                email: process.env.EMAIL,
                name: process.env.NAME,
                mobileNo: process.env.MOBILE,
                githubUsername: process.env.GITHUB_USERNAME,
                rollNo: process.env.ROLL_NO,
                accessCode: process.env.ACCESS_CODE
            }
        );

        console.log("Registration successful");
        console.log(response.data);

    } catch (error) {
        console.log(
            error.response?.data || error.message
        );
    }
}

register();