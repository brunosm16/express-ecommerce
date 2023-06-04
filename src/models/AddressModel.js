const { Model, DataTypes } = require('sequelize');

class AddressModel extends Model {
	static init(connection) {
		super.init(
			{
				building_number: DataTypes.INTEGER,
				city: DataTypes.STRING,
				state: DataTypes.STRING,
				street: DataTypes.STRING,
				zip_code: DataTypes.STRING,
				created_at: DataTypes.DATE,
				updated_at: DataTypes.DATE,
				deleted_at: DataTypes.DATE,
			},
			{
				sequelize: connection,
				tableName: 'addresses',
				paranoid: true,
			}
		);
	}
}

module.exports = AddressModel;
