const { formatBodyParams } = require('../../utils/format-body-params');
const { generateUUID } = require('../cryptography/cryptography-service');

const saveEntity = async (Model, body, allowedParams, resultAllowedParams) => {
	const { dataValues } = await Model.create({
		id: generateUUID(),
		...formatBodyParams(body, allowedParams),
	});

	return formatBodyParams(dataValues, resultAllowedParams);
};

const updateEntity = async (Model, body, args, allowedParams) =>
	Model.update({ ...formatBodyParams(body, allowedParams) }, { where: args });

module.exports = { saveEntity, updateEntity };
