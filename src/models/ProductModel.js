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
				createdAt: DataTypes.DATE,
				updatedAt: DataTypes.DATE,
				deletedAt: DataTypes.DATE,
			},
			{
				sequelize: connection,
				tableName: 'products',
			}
		);
	}
}

module.exports = ProductModel;
