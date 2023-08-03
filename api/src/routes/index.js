const { Router } = require('express');
const getRace = require('../controllers/getRace');
const getDogByIdRace = require('../controllers/getDogByIdRace');
const getDogByName = require('../controllers/getDogByName');
const postDogs = require('../controllers/postDogs');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getRace);
router.get('/dogs/:idRace', getDogByIdRace);
router.get('/dogsname', getDogByName);
router.post('/dogs', postDogs);



module.exports = router;
