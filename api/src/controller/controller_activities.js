//require
const { Countries, Activities } = require('../db.js');
const { getApiToBd } = require('./controller_countries')
const { Op } = require('sequelize');
//*************************************************************************************//
const getActivities = async (req, res, next) => {
     try {
          let activities = await Activities.findAll();
          res.status(200).json({
               msg: `Total Activities:`,
               info: activities,
          });
     } catch (error) {next(error) }
};
//*************************************************************************************//
const addActivities = async (req, res, next) => {
     try {
          const { id_Countries, Name, Difficulty, Duration, Season } = req.body;
          await getApiToBd(); //Consultar la BD si tiene Countries si no cargarlos de la API a la BD

          if (!id_Countries || !Name || !Difficulty || !Duration || !Season) {
               return res.status(404).json('Please complete all fields:');
          }

          const result = await Activities.findAll()
          if (result.lenght) {
               result = await result.filter(el => el.Name.toLowerCase().include(name.toLowerCase()))
               if (result) return res.status(404).json('This activity already exist:');
          }

          //result = await Activities.findAll({ where: { Name: { [Op.iRegexp]: Name } } });


          const newActivities = await Activities.create({ Name, Difficulty, Duration, Season });
          await newActivities.addCountries(id_Countries)

          // for (const ID of id_Countries) {await newActivities.addCountries(ID)}
          //var sql = await Activities.findAll({ where: { Name: { [Op.eq]: Name } }, include: [{ model: Countries }] });

          var sql = await Activities.findOne({ where: { Name: Name }, include: [{ model: Countries }] });

          res.status(200).json(sql);

     } catch (error) {next(error) } //res.status(500).send(error);
}

module.exports = { addActivities, getActivities };