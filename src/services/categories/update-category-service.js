const { CATEGORY_PARAMS_TO_CREATE_UPDATE } = require('../../constants/allowed-params');
const { EntityNotExistsError } = require('../../errors/errors-types');
const CategoryModel = require('../../models/CategoryModel');
const { formatBodyParams } = require('../../utils/format-body-params');
const { validateEmptyBody } = require('../../utils/object-utils');

const validateCategory = (category, body) => {
	if (!category) throw new EntityNotExistsError();
	validateEmptyBody(body);
};

const update = async (id, body) => {
	const category = await CategoryModel.findByPk(id);

	validateCategory(category, body);

	const params = formatBodyParams(body, CATEGORY_PARAMS_TO_CREATE_UPDATE);

	return category.update({ ...params });
};

module.exports = { update };
