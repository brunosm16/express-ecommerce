const { formatBodyParams } = require('../../utils/format-body-params');
const { generateUUID } = require('../cryptography/cryptography-service');

const saveEntity = (Model, body, allowedParams) =>
	Model.create({ id: generateUUID(), ...formatBodyParams(body, allowedParams) });

module.exports = { saveEntity };
