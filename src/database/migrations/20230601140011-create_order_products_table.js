/* eslint-disable no-unused-vars */

const { DataTypes } = require('sequelize');
const { generateUUID } = require('../../services/cryptography/cryptography-service');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('order_products', {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
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
				type: Sequelize.DATE,
				allowNull: true,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('order_products');
	},
};
