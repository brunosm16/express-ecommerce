const { DataTypes, Model } = require('sequelize');

class CategoryModel extends Model {
	static init(connection) {
		super.init(
			{
				name: DataTypes.STRING,
				product_id: DataTypes.UUID,
			},
			{ sequelize: connection, table: 'categories' }
		);
	}
}

module.exports = CategoryModel;
