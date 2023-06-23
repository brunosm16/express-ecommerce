const { orderParamsToPersist } = require('../../constants/params/orders-params');
const {
	makeParentArgs,
	makeChildArgs,
	makeTableAssociation,
} = require('../../database/factories/make-table-association');
const {
	EntityNotExistsError,
	BadRequestError,
	InternalServerError,
} = require('../../errors/instances');
const { UserModel, AddressModel } = require('../../models');
const OrderModel = require('../../models/OrderModel');
const ProductModel = require('../../models/ProductModel');
const { persistEntity } = require('../entities');
const { validateEntitiesAssociation } = require('../entities/validate-entity');
const sequelizeConnection = require('../../database/sequelize/connection');
const {
	INVALID_QUANTITY_BOUGHT,
	PRODUCT_NOT_FOUND,
} = require('../../constants/messages/entities-messages/products');
const { findEntityByPk } = require('../entities/find-entity');
const { statusEnumsObject } = require('../../constants/enums/order-status');
const OrdersProductModel = require('../../models/OrdersProductModel');
const {
	ordersProductsParamsToExpose,
	ordersProductsParamsToPersist,
} = require('../../constants/params/orders-products-params');

const validateUserAddressAssociation = async (user_id, address_id) => {
	const userArgs = makeParentArgs(UserModel, user_id, 'users');
	const addressArgs = makeChildArgs(AddressModel, address_id, 'addresses');
	const AssociationTable = makeTableAssociation(userArgs, addressArgs);
	await validateEntitiesAssociation(AssociationTable);
};

const validateProductsQuantityBought = (quantityBought, { quantity_in_stock }) => {
	if (quantityBought > quantity_in_stock) throw new BadRequestError(INVALID_QUANTITY_BOUGHT);
};

const shouldApplyDiscount = (startDate, endDate) => {
	const currentDate = new Date();
	const startDateValid = startDate <= currentDate;
	const endDateValid = currentDate <= endDate;
	const bothDatesValid = startDate < endDate;
	if (startDateValid && endDateValid && bothDatesValid) return true;
	return false;
};

const applyDiscount = (percentage, price) => {
	const discount = percentage > 0.9 ? percentage / 10 : percentage;
	return price - price * discount;
};

const getPriceWithDiscountApplied = (product) => {
	const { start_discount_date, end_discount_date, discount_percentage, price } = product;
	const validDiscount = shouldApplyDiscount(start_discount_date, end_discount_date);
	if (validDiscount) return applyDiscount(discount_percentage, price);
	return price;
};

const getUpdatedStockParams = (product, quantityBought) => {
	const { quantity_in_stock, quantity_sold } = product;
	return {
		sold: quantity_sold + quantityBought,
		stock: quantity_in_stock - quantityBought,
	};
};

const formatProductParamsToUpdate = (product, quantity_bought) => {
	const { sold: quantity_sold, stock: quantity_in_stock } = getUpdatedStockParams(
		product,
		quantity_bought
	);

	return {
		price: getPriceWithDiscountApplied(product),
		quantity_sold,
		quantity_in_stock,
		status: statusEnumsObject.processing,
	};
};

const groupProductsById = (payload) => {
	const obj = {};
	payload.forEach(({ product_id, quantity_bought }) => {
		const existingQuantity = obj[product_id];
		const newQuantity = existingQuantity ? quantity_bought + existingQuantity : quantity_bought;
		obj[product_id] = newQuantity;
	});
	return obj;
};

const validateProductExists = (product) => {
	if (!product) throw new EntityNotExistsError(PRODUCT_NOT_FOUND);
};

const handlePromiseError = () => {
	throw new InternalServerError();
};

const persistProducts = async (payload, transaction) => {
	const products = groupProductsById(payload);
	const productsIds = Object.keys(products);

	const promises = productsIds.map(async (productId) => {
		const quantityBought = products[productId];
		const product = await findEntityByPk(ProductModel, productId);
		const productTotalPrice = product.price * quantityBought;

		validateProductExists(product);
		validateProductsQuantityBought(quantityBought, product);

		const body = formatProductParamsToUpdate(product, quantityBought);

		await product.update({ ...body }, { where: { id: productId }, transaction });

		return productTotalPrice;
	});

	const productsPersisted = await Promise.all(promises);
	const orderTotalPrice = productsPersisted.reduce((acc, currentValue) => acc + currentValue, 0);

	return { productsIds, orderTotalPrice };
};

const saveOrder = async (orderTotalPrice, body, transaction) => {
	const formattedBody = { ...body, order_total_price: orderTotalPrice };

	const { id: orderId, order_total_price } = await persistEntity.saveEntity(
		OrderModel,
		formattedBody,
		orderParamsToPersist,
		[...orderParamsToPersist, 'id'],
		transaction
	);

	return { orderId, order_total_price };
};

const persistOrderProducts = async (products, order_id, transaction) => {
	const promises = products.map(async (product_id) => {
		return persistEntity.saveEntity(
			OrdersProductModel,
			{ product_id, order_id },
			ordersProductsParamsToPersist,
			ordersProductsParamsToExpose,
			transaction
		);
	});

	await Promise.all(promises).catch(handlePromiseError);
};

const persistOrder = async (body) => {
	const transaction = await sequelizeConnection.transaction();

	try {
		const { products_payload, user_id, address_id } = body;

		await validateUserAddressAssociation(user_id, address_id);

		const { productsIds, orderTotalPrice } = await persistProducts(products_payload, transaction);
		const persistedOrder = await saveOrder(orderTotalPrice, body, transaction);
		await persistOrderProducts(productsIds, persistedOrder?.orderId, transaction);

		await transaction.commit();

		return persistedOrder;
	} catch (err) {
		await transaction.rollback();
		throw err;
	}
};

module.exports = { persistOrder };
