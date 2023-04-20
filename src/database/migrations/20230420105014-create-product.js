/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('products', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			price: {
				type: Sequelize.DECIMAL,
				allowNull: false,
			},
			quantity_in_stock: {
				type: Sequelize.INTEGER,
				defaultValue: 0,
				allowNull: false,
			},
			quantity_sold: {
				type: Sequelize.INTEGER,
				defaultValue: 0,
				allowNull: false,
			},
			discount_percent: {
				type: Sequelize.INTEGER,
				defaultValue: 0,
				allowNull: false,
			},
			discount_start_date: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			discount_end_date: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			width: {
				type: Sequelize.DECIMAL,
				allowNull: false,
			},
			height: {
				type: Sequelize.DECIMAL,
				allowNull: false,
			},
			length: {
				type: Sequelize.DECIMAL,
				allowNull: false,
			},
			sku: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			deleted_at: {
				type: Sequelize.DATE,
				allowNull: true,
			},
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Products');
	},
};
