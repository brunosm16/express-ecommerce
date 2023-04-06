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
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('users');
	},
};
