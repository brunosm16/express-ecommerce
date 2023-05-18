const { Model, DataTypes } = require('sequelize');

class UserModel extends Model {
	static init(connection) {
		super.init(
			{
				first_name: DataTypes.STRING,
				last_name: DataTypes.STRING,
				primary_email: DataTypes.STRING,
				secondary_email: DataTypes.STRING,
				date_of_birth: DataTypes.DATE,
				password_hash: DataTypes.STRING,
				reset_password_token: DataTypes.STRING,
				reset_password_expire_date: DataTypes.DATE,
				admin: DataTypes.BOOLEAN,
			},
			{
				tableName: 'users',
				sequelize: connection,
			}
		);
	}

	static associate({ AddressModel }) {
		this.hasMany(AddressModel, {
			foreignKey: 'customer_id',
			as: 'addresses',
		});
	}
}

module.exports = UserModel;
