/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('addresses', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			city: { type: Sequelize.STRING, allowNull: false },
			state: { type: Sequelize.STRING, allowNull: false },
			street: { type: Sequelize.STRING, allowNull: false },
			district: { type: Sequelize.STRING, allowNull: false },
			zipcode: { type: Sequelize.STRING, allowNull: false },
			number: { type: Sequelize.INTEGER, allowNull: false },
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			deleted_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('addresses');
	},
};
