require('dotenv').config();
const { URL, API_KEY } = process.env;
const axios = require("axios");

const getRace = async (req, res) => {
    try {
        const response = await axios.get(`${URL}?api_key=${API_KEY}`);
        const data = response.data;
        if (data) {
            return res.status(200).json(data);
        } else {
            return res.status(400).send('Not Found');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = getRace;