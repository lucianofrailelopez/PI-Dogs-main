const { Dog } = require("../db");

const postDogs = async (req, res) => {
  try {
    const { image, name, weight, height, life_span } = req.body;

    if (!image || !name || !weight || !height || !life_span) {
      return res.status(401).send("Not Found");
    }

    console.log({ image, name, weight, height, life_span });

    await Dog.findOrCreate({
      where: { image, name, weight, height, life_span },
    });
    const AllDogs = await Dog.findAll();
    return res.json(AllDogs);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postDogs;