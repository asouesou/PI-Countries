var { Router } = require('express');
var router = Router();

const {
     getCountryByName,
     getCountryById,
} = require('../controller/controller_countries');

router.get('/countries', getCountryByName); //router.get('/countries', getCountryByName); //req.query **countries?name=Rep
router.get('/countries/:id', getCountryById); //req.params**countries/123

//GET https://restcountries.com/v3/all
//GET https://restcountries.com/v3/name/{name}
//GET https://restcountries.com/v3/alpha/{code}

module.exports = router;

/* GET /countries: 
     1. En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe retonar sólo los datos necesarios para la ruta principal).
     2. Obtener un listado de los paises.
[ ] GET /countries?name="...":
     1. Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
     2. Si no existe ningún país mostrar un mensaje adecuado
 */

/* [ ] GET /countries/{idPais}:
     1. Obtener el detalle de un país en particular
     2. Debe traer solo los datos pedidos en la ruta de detalle de país
     3. Incluir los datos de las actividades turísticas correspondientes 
*/
