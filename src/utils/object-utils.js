const { EmptyBodyError } = require('../errors/errors-types');

// eslint-disable-next-line no-unused-vars
const nonNullObjectValues = (obj) => Object.entries(obj).filter(([key, value]) => !!value);

const filterNullValuesFromObj = (obj) => Object.fromEntries(nonNullObjectValues(obj));

const filterObjByKeys = (obj, keys) => {
	// eslint-disable-next-line no-unused-vars
	const filteredEntriesByKeys = Object.entries(obj).filter(([key, value]) => keys.includes(key));

	return Object.fromEntries(filteredEntriesByKeys);
};

const validateEmptyBody = (body) => {
	if (!body || !Object.keys(body)?.length) throw new EmptyBodyError();
};

module.exports = { filterNullValuesFromObj, filterObjByKeys, validateEmptyBody };
