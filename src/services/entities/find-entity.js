const findAllEntities = async (Model, params) => Model.findAll({ attributes: params });

const findEntityByPk = async (Model, pk, params) => Model.findByPk(pk, { attributes: params });

const findEntityByKey = async (keyValue, Model) => {
	const { key, value } = keyValue;
	const args = { [key]: value };
	return Model.findOne({ where: args });
};

module.exports = { findAllEntities, findEntityByPk, findEntityByKey };
