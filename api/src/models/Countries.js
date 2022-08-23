const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'countries',
		{
			ID: {
				//codigo de 3 letras
				type: DataTypes.STRING,
				allownull: false,
				primaryKey: true,
			},
			Name: {
				type: DataTypes.STRING, // VARCHAR(255)
				allowNull: true,
				// set(value) {
				// 	this.setDataValue('Name', value.toUpperCase());
				// },
			},
			Image: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Continent: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Capital: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Subregion: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			Area: {
				type: DataTypes.DECIMAL,
				allowNull: true,
			},
			Population: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
		},
		{
			timestamps: false,
			createdAt: false,
			updatedAd: false,
			freezeTableName: true, //La tabla Utilizará el mismo name del modelo
		}
	);
};
