const { DataTypes, Model } = require('sequelize');

class OrdersProduct extends Model {
	static init(connection) {
		super.init(
			{
				order_id: DataTypes.UUID,
				product_id: DataTypes.UUID,
			},
			{ sequelize: connection, tableName: 'orders_products', paranoid: true }
		);
	}
}

module.exports = OrdersProduct;
