const { categoriesParams } = require('../../constants/params');
const { EntityNotExistsError } = require('../../errors/instances');
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

	const params = formatBodyParams(body, categoriesParams.categoryParamsToPersist);

	return category.update({ ...params });
};

module.exports = { update };
