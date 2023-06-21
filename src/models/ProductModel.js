const { Model, DataTypes } = require('sequelize');

class ProductModel extends Model {
	static init(connection) {
		super.init(
			{
				name: DataTypes.STRING,
				price: DataTypes.DECIMAL,
				start_discount_date: DataTypes.DATE,
				end_discount_date: DataTypes.DATE,
				discount_percentage: DataTypes.DECIMAL,
			},
			{
				sequelize: connection,
				tableName: 'products',
			}
		);
	}

	static associate({ ProductModel: ThisModel, CategoryModel, OrdersProductModel, OrderModel }) {
		ThisModel.belongsTo(CategoryModel, { foreignKey: 'category_id', as: 'categories' });

		ThisModel.belongsToMany(OrderModel, {
			through: OrdersProductModel,
			foreignKey: 'product_id',
			as: 'orders',
		});
	}
}

module.exports = ProductModel;
