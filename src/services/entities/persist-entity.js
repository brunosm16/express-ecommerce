const { formatBodyParams } = require('../../utils/format-body-params');
const { generateUUID } = require('../cryptography/cryptography-service');

const saveEntity = (Model, body, allowedParams) =>
	Model.create({ id: generateUUID(), ...formatBodyParams(body, allowedParams) });

const updateEntity = (Model, body, args, allowedParams) =>
	Model.update({ ...formatBodyParams(body, allowedParams) }, { where: args });

module.exports = { saveEntity, updateEntity };
