require('dotenv').config();
const { URL } = process.env;
const axios = require("axios");

async function getDogByIdRace(req, res) {
  try {
    const { idRace } = req.params;
    const response = await axios(`${URL}/search?q=${idRace}`);
    const data = response.data;

    if (data) {
      return res.status(200).json(data);
    } else {
      const responseDB = await Dog.findAll();
      const dogFromDB = responseDB.find((dog) => dog.breed_group === idRace);
      
      if (dogFromDB) {
        return res.status(200).json({
            id: dogFromAPI.id,
            image: dogFromAPI.image.url,
            name: dogFromAPI.name,
            weight: dogFromAPI.weight,
            height: dogFromAPI.height,
            life_span: dogFromAPI.life_span,
        });
      } else {
        return res.status(404).json({ error: "Raza no encontrada" });
      }
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = getDogByIdRace;
