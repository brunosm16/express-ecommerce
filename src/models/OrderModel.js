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
}

module.exports = OrderModel;
