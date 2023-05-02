const { filterNullValuesFromObj, filterObjByKeys } = require('./object-utils');

const formatBodyParams = (body, params) => {
	const nonNullBody = filterNullValuesFromObj(body);
	const filteredBody = filterObjByKeys(nonNullBody, params);

	return filteredBody;
};

module.exports = { formatBodyParams };
