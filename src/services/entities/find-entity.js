const findAll = async (Model, params) => Model.findAll({ attributes: params });

const findByPk = async (Model, pk, params) => Model.findByPk(pk, { attributes: params });

const findEntityByKey = async (keyValue, Model) => {
	const { key, value } = keyValue;
	const args = { [key]: value };
	return Model.findOne({ where: args });
};

module.exports = { findAll, findByPk, findEntityByKey };
