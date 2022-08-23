var { Router } = require('express');
var router = Router();

const { addActivities, getActivities } = require('../controller/controller_activities');

router.post('/activities', addActivities);
router.get('/activities/', getActivities);
// router.get('/activities/:id', getActId);

module.exports = router;

// POST /activities:
// 1. Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// 2. Crea una actividad turística en la base de datos, relacionada con los países correspondientes
