const { Model, DataTypes } = require('sequelize');

class OrderModel extends Model {
	static init(connection) {
		super.init(
			{
				total_price: DataTypes.DECIMAL,
				status: DataTypes.STRING,
			},
			{ sequelize: connection, tableName: 'orders' }
		);
	}

	static associate({ OrderModel: ThisModel, UserModel, AddressModel }) {
		ThisModel.belongsTo(UserModel, {
			foreignKey: 'user_id',
			as: 'user',
		});

		ThisModel.belongsTo(AddressModel, {
			foreignKey: 'address_id',
			as: 'address',
		});
	}
}

module.exports = OrderModel;
