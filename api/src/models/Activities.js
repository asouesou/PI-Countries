const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
//prueba de moddsfdsf

const Activities = (sequelize) => {
	// Se define el modelo
	sequelize.define('activities', {
		// ID: {
		// 	type: DataTypes.INTEGER,
		// 	autoIncrement: true,
		// 	primaryKey: true,
		// },
		Name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Difficulty: {
			type: DataTypes.ENUM('1', '2', '3', '4', '5'),
			allowNull: false,
		},
		Duration: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: 'unknown',
		},
		Season: {
			type: DataTypes.ENUM('Summer', 'Winter', 'Spring', 'Autumn'),
			allowNull: false,
		},
	});
};

module.exports = Activities;
