const { Model, DataTypes } = require('sequelize');

class ProductModel extends Model {
	static init(connection) {
		super.init(
			{
				name: DataTypes.STRING,
				price: DataTypes.DECIMAL,
				quantity_in_stock: DataTypes.INTEGER,
				quantity_sold: DataTypes.INTEGER,
				discount_percentage: DataTypes.INTEGER,
				discount_start_date: DataTypes.DATE,
				discount_end_date: DataTypes.DATE,
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
