/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('addresses', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
			},
			building_number: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			city: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			state: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			street: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			zip_code: {
				allowNull: false,
				type: Sequelize.STRING,
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
		return queryInterface.dropTable('addresses');
	},
};
