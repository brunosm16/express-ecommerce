/* eslint-disable no-unused-vars */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('order_products', {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
			},

			order_id: {
				type: Sequelize.UUID,
				references: { model: 'orders', key: 'id' },
				allowNull: false,
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},

			product_id: {
				type: Sequelize.UUID,
				references: { model: 'products', key: 'id' },
				allowNull: false,
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('order_products');
	},
};
