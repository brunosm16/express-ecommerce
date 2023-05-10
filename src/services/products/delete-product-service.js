const ProductModel = require('../../models/ProductModel');
const { validateEntityNotExistsByPk } = require('../entities/validate-entity');

const deleteProduct = async (id) => {
	await validateEntityNotExistsByPk(id, ProductModel);
	return ProductModel.destroy({ where: { id } });
};

module.exports = { deleteProduct };
