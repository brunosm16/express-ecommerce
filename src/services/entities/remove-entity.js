const removeEntityByKeyValue = (Model, key, value) => {
	const args = { [key]: value };
	return Model.destroy({ where: args });
};

module.exports = { removeEntityByKeyValue };
