//require
const { Countries, Activities } = require('../db.js');
const axios = require('axios');
const API_URL_COUNTRIES = 'https://restcountries.com/v3/all';
const { Op } = require('sequelize');
//*************************************************************************************//
const getCountryByName = async (req, res) => {
	var name = req.query.name;
	let countries = {};
	try {
		//Consultar la BD countries si tiene datos si no cargarlos de la API a la BD
		var cant = await Countries.count();
		if (!cant) await getApiToBd();

		//if (Object.keys(name).length === 0 && name.constructor === Object) {
		if (!name) {
			//Not name => list all countries.
			countries = await Countries.findAll();
			return res.json({
				msg: 'Total list of countries - No filter entered',
				info: countries,
			});
		}

		// result = await Countries.findAll();
		// let expression = new RegExp(`${name}.*`, "i");
		// let nameCountries = await result.filter(e => expression.test(e.Name));

		Result = await Countries.findAll({ where: { Name: { [Op.iRegexp]: name } } });
		return res.json({ msg: Result.length ? `Countries with name like %${name}%` : `Country not found, sorry`, info: Result });
	} catch (error) {
		console.log(error);
	}
};

const getCountryById = async (req, res, next) => {
	try {
		var id = req.params.id;

		await getApiToBd(); //Consultar la BD si tiene Countries si no cargarlos de la API a la BD

		if (id) {
			var sql = await Countries.findAll({
				where: { ID: { [Op.eq]: id } },
				include: [{ model: Activities }],
			}); //SELECT ___ FROM `Countries` AS `Country`   LEFT OUTER JOIN `Activities` AS `Act` ON `Country`.`ID` = `Act`.`id`   WHERE `Act`.`id` = id;
		}

		res.status(200).json({
			msg: `List the Countries with Id = ${id}`,
			info: sql,
		});
	} catch (error) {
		console.log(error);
	}
};

const getApiToBd = async (req, res, next) => {
	//Consultar la BD si tiene Countries si no cargarlos de la API a la BD
	try {
		var cant = await Countries.count();
		if (!cant) {
			const countries = await getApiCountries();
			await Promise.all(
				countries.map(async (e) => await Countries.create(e))
			);
			console.log('datas add to BD countries');
		}
	} catch (error) {
		console.log(error);
	}
};

const getApiCountries = async (req, res, next) => {
	try {
		var allCountries = await axios.get(API_URL_COUNTRIES);
		var filterCountries = await allCountries.data.map((c) => {
			return {
				ID: c.cca3,
				Name: c.name.official,
				Image: c.flags[0],
				Continent: c.continents[0],
				Capital: c.capital ? c.capital[0] : 'Not Capital',
				Subregion: c.subregion,
				Area: c.area,
				Population: c.population,
			};
		});
		return filterCountries;
	} catch (error) {
		console.log(error);
	}
};

module.exports = { getCountryByName, getCountryById, getApiToBd };
