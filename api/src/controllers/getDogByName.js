require("dotenv").config();
const { URL, API_KEY } = process.env;
const axios = require("axios");

const getDogByName = async (req, res) => {
  try {
    const dogName = req.query.name;

    const response = await axios.get(`${URL}?api_key=${API_KEY}`);
    const data = response.data;

    const foundDogs = data.filter(data => data.name === dogName);

    const responseDB = await axios.get(`http://localhost:3001/dogs`);
    const dataDB = responseDB.data;

    const foundDogsDB = dataDB.filter(data => data.name === dogName);

    const combinedResults = [...foundDogs, ...foundDogsDB];

    if (combinedResults.length > 0) {
      return res.status(200).json(foundDogs);
    } else {
      return res.status(400).send('Not Found');
    }

  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = getDogByName;
