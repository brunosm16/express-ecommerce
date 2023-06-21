/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('orders_products', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
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
		return queryInterface.dropTable('orders_products');
	},
};
