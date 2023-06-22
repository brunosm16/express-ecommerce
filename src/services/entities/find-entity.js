const findAllEntities = async (Model, params = null, order = null) =>
	Model.findAll({ attributes: params, order });

const findEntityByPk = async (Model, pk, params) => Model.findByPk(pk, { attributes: params });

const findEntityByKey = async (keyValue, Model) => {
	const { key, value } = keyValue;
	const args = { [key]: value };
	return Model.findOne({ where: args });
};

const findAllEntitiesByKey = async (keyValue, Model) => {
	const { key, value } = keyValue;
	const args = { [key]: value };
	return Model.findAll({ where: args });
};

module.exports = { findAllEntities, findEntityByPk, findEntityByKey, findAllEntitiesByKey };
