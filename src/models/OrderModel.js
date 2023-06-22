const { Model, DataTypes } = require('sequelize');
const orderStatus = require('../constants/enums/order-status');

class OrderModel extends Model {
	static init(connection) {
		super.init(
			{
				order_total_price: DataTypes.DECIMAL,
				status: DataTypes.ENUM(orderStatus.statusEnums),
			},
			{ sequelize: connection, tableName: 'orders' }
		);
	}

	static associate({
		OrderModel: ThisModel,
		UserModel,
		AddressModel,
		ProductModel,
		OrdersProductModel,
	}) {
		ThisModel.belongsTo(UserModel, {
			foreignKey: 'user_id',
			as: 'user',
		});

		ThisModel.belongsTo(AddressModel, {
			foreignKey: 'address_id',
			as: 'address',
		});

		ThisModel.belongsToMany(ProductModel, {
			through: OrdersProductModel,
			foreignKey: 'order_id',
			as: 'products',
		});
	}
}

module.exports = OrderModel;
