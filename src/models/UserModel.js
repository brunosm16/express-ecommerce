const { Model, DataTypes } = require('sequelize');

class UserModel extends Model {
	static init(connection) {
		super.init(
			{
				full_name: DataTypes.STRING,
				email: DataTypes.STRING,
				password_hash: DataTypes.STRING,
				token_reset_password: DataTypes.STRING,
				token_reset_password_expire_date: DataTypes.DATE,
				is_admin: DataTypes.BOOLEAN,
			},
			{
				tableName: 'users',
				sequelize: connection,
			}
		);
	}

	static associate({ UserModel: ThisModel, AddressModel, OrderModel }) {
		ThisModel.hasMany(AddressModel, {
			foreignKey: 'user_id',
			as: 'addresses',
		});

		ThisModel.hasMany(OrderModel, {
			foreignKey: 'user_id',
			as: 'orders',
		});
	}
}

module.exports = UserModel;
