/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			first_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			last_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			primary_email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			secondary_email: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			date_of_birth: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			password_hash: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			reset_password_token: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			reset_password_expire_date: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			admin: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
			deleted_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('users');
	},
};
