const { DataTypes, Model } = require('sequelize');

class CategoryModel extends Model {
	static init(connection) {
		super.init(
			{
				name: DataTypes.STRING,
				parent_category_id: DataTypes.UUID,
			},
			{ sequelize: connection, tableName: 'categories' }
		);
	}

	static associate({ CategoryModel: ThisModel, ProductModel }) {
		ThisModel.hasMany(ProductModel, { foreignKey: 'category_id', as: 'products' });
	}
}

module.exports = CategoryModel;
