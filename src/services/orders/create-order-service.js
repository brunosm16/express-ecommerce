const { ordersParams } = require('../../constants/params');
const {
	USER_NOT_FOUND,
	ADDRESS_NOT_FOUND,
	PRODUCT_NOT_EXISTS,
} = require('../../constants/error-messages');
const { EntityNotExistsError, BadRequestError } = require('../../errors/errors-types');
const OrderModel = require('../../models/OrderModel');
const ProductModel = require('../../models/ProductModel');
const { formatBodyParams } = require('../../utils/format-body-params');
const { generateUUID } = require('../cryptography/cryptography-service');
const { findUserByAssociation } = require('../users/find-user');

const validateUserAddress = async (user_id, address_id) => {
	const user = await findUserByAssociation(user_id, address_id, 'addresses');
	if (!user) throw new EntityNotExistsError(USER_NOT_FOUND);
	if (!user?.addresses?.length) throw new EntityNotExistsError(ADDRESS_NOT_FOUND);
};

const validateNotFoundProducts = (products) => {
	const notFound = products.some((productFound) => !productFound);
	if (notFound) throw new EntityNotExistsError(PRODUCT_NOT_EXISTS);
};

const getProductsByPayload = async (payload) => {
	const promises = await payload.map(({ product_id }) => {
		return ProductModel.findByPk(product_id);
	});

	const products = await Promise.all(promises);

	validateNotFoundProducts(products);

	const uniqueProducts = products.filter((current, index, arr) => {
		const firstIndex = arr.findIndex(({ id }) => current.id === id);
		return firstIndex === index;
	});

	return uniqueProducts;
};

const groupQuantityBoughtByProducts = (payload) => {
	const bought = {};

	payload.forEach(({ product_id, quantity_bought }) => {
		const mappedQuantity = bought[product_id];

		if (mappedQuantity) bought[product_id] += quantity_bought;
		else bought[product_id] = quantity_bought;
	});

	return bought;
};

const mapQuantityBoughtInProducts = (products, bought) => {
	return products.map((product) => {
		const { id } = product;
		const quantity_bought = bought[id] ?? 0;

		// eslint-disable-next-line no-param-reassign
		product.quantity_sold = quantity_bought;

		return product;
	});
};

const validateProductsQuantityBought = (products) => {
	products.forEach(({ quantity_bought, quantity_in_stock, product_id }) => {
		if (quantity_bought > quantity_in_stock) {
			throw new BadRequestError(`Stock lower than quantity bought for product : ${product_id}`);
		}
	});
};

const getOrderTotalPrice = (products) =>
	products.reduce((acc, current) => {
		const { quantity_sold } = current;
		const price = Number(current?.dataValues?.price);

		if (!price) throw new Error('Invalid price');

		const total = price * quantity_sold;

		return acc + total;
	}, 0);

const getMappedProducts = async (payload) => {
	const productsPayload = await getProductsByPayload(payload);
	const boughtByProduct = groupQuantityBoughtByProducts(payload);
	const finalProducts = mapQuantityBoughtInProducts(productsPayload, boughtByProduct);
	validateProductsQuantityBought(finalProducts);
	return finalProducts;
};

const setRelationshipOrderProducts = (createdOrder, products) => {
	const ordersProducts = products.map((product) => {
		return createdOrder.addProduct(product);
	});

	return Promise.all(ordersProducts);
};

const create = async (body) => {
	const { products_payload, user_id, address_id } = body;

	await validateUserAddress(user_id, address_id);

	const products = await getMappedProducts(products_payload);
	const total_price = getOrderTotalPrice(products);
	const params = { ...body, total_price };

	const createdOrder = await OrderModel.create({
		id: generateUUID(),
		...formatBodyParams(params, ordersParams.orderParamsToPersist),
	});

	await setRelationshipOrderProducts(createdOrder, products);

	return createdOrder;
};

module.exports = { create };
