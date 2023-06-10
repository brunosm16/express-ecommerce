/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('users', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
			},
			full_name: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			password_hash: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			token_reset_password: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			token_reset_password_expire_date: {
				allowNull: true,
				type: Sequelize.DATE,
			},
			is_admin: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
			updated_at: {
				allowNull: true,
				type: Sequelize.DATE,
			},
			deleted_at: {
				allowNull: true,
				type: Sequelize.DATE,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('users');
	},
};
