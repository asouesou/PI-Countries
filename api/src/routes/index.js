const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router_countries = require('./router_countries');
const router_activities = require('./router_activities');
//const roouter_activities = require('./router_activities');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', router_countries);
router.use('/', router_activities);

/* 
router.use('/countries', (req, res) => {
     console.log('hola');
     return res.send('Bienvenido a COUNTRIES'); //Return /cortar ejecucion
}); */
//router.use('/activity', activities);

/* [ ] POST /activities:
     1. Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
     2. Crea una actividad turística en la base de datos, relacionada con los países correspondientes
*/
module.exports = router;
