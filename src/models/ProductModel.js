const { Model, DataTypes } = require('sequelize');

class ProductModel extends Model {
	static init(connection) {
		super.init(
			{
				name: DataTypes.STRING,
				description: DataTypes.STRING,
				price: DataTypes.DECIMAL,
				quantity_in_stock: DataTypes.INTEGER,
				quantity_sold: DataTypes.INTEGER,
				discount_percent: DataTypes.INTEGER,
				discount_start_date: DataTypes.DATE,
				discount_end_date: DataTypes.DATE,
				width: DataTypes.DECIMAL,
				height: DataTypes.DECIMAL,
				length: DataTypes.DECIMAL,
				sku: DataTypes.STRING,
			},
			{
				sequelize: connection,
				tableName: 'products',
			}
		);
	}

	static associate({ ProductModel: ThisModel, CategoryModel, OrdersProductModel }) {
		ThisModel.belongsTo(CategoryModel, { foreignKey: 'category_id', as: 'categories' });

		ThisModel.belongsToMany(OrdersProductModel, {
			through: OrdersProductModel,
			foreignKey: 'product_id',
			as: 'orders',
		});
	}
}

module.exports = ProductModel;
