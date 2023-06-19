/* eslint-disable no-unused-vars */

const orderStatus = require('../../constants/enums/order-status');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('orders', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
			},
			user_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: { model: 'users', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			address_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: { model: 'addresses', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			order_total_price: {
				type: Sequelize.DECIMAL,
				allowNull: false,
			},
			status: {
				type: Sequelize.ENUM(orderStatus.statusEnums),
				defaultValue: orderStatus.defaultStatus,
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
		return queryInterface.dropTable('orders');
	},
};
