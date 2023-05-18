const { Model, DataTypes } = require('sequelize');

class AddressModel extends Model {
	static init(connection) {
		super.init(
			{
				city: DataTypes.STRING,
				state: DataTypes.STRING,
				street: DataTypes.STRING,
				district: DataTypes.STRING,
				zipcode: DataTypes.STRING,
				number: DataTypes.INTEGER,
			},
			{
				sequelize: connection,
				tableName: 'addresses',
				paranoid: true,
			}
		);
	}

	static associate({ UserModel }) {
		this.belongsTo(UserModel, {
			foreignKey: 'customer_id',
			as: 'customer',
		});
	}
}

module.exports = AddressModel;
