/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

const { faker } = require('@faker-js/faker');
const { OrdersProductsModel } = require('../../models');

const getTableIds = async (table, query) => {
	const data = await query.select(null, table);
	return data.map(({ id }) => id);
};

const buildOrderProduct = (order_id, product_id) => ({
	id: faker.datatype.uuid(),
	order_id,
	product_id,
});

/** @type {import('sequelize-cli').Migration} */
const seedOrderProducts = async (queryInterface) => {
	const productsIds = await getTableIds('products', queryInterface);
	const ordersIds = await getTableIds('orders', queryInterface);

	const arrayLength =
		productsIds?.length > ordersIds?.length ? productsIds?.length : ordersIds?.length;

	const ordersProducts = [];

	for (let i = 0; i < arrayLength; i++) {
		const currentOrder = ordersIds[i];
		const currentProduct = productsIds[i];
		if (currentOrder && currentProduct) {
			ordersProducts.push(buildOrderProduct(currentOrder, currentProduct));
		}
	}

	return queryInterface.bulkInsert('orders_products', ordersProducts);
};

module.exports = {
	async up(queryInterface, Sequelize) {
		return seedOrderProducts(queryInterface);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('orders_products', {}, null);
	},
};
