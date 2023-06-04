const { DataTypes, Model } = require('sequelize');
const { generateUUID } = require('../services/cryptography/cryptography-service');

class OrdersProductModel extends Model {
	static init(connection) {
		super.init(
			{
				id: {
					type: DataTypes.UUID,
					defaultValue: () => generateUUID(),
					allowNull: false,
					primaryKey: true,
				},
				order_id: DataTypes.UUID,
				product_id: DataTypes.UUID,
			},
			{
				sequelize: connection,
				tableName: 'order_products',
				paranoid: true,
				hooks: {
					beforeSave: async (ordersProduct) => {
						// eslint-disable-next-line no-param-reassign
						ordersProduct.id = generateUUID();
						return ordersProduct;
					},
				},
			}
		);
	}
}

module.exports = OrdersProductModel;
