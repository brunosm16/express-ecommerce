const { EmptyBodyError } = require('../errors/errors-types');

const nonEmptyObjectValues = (obj) =>
	// eslint-disable-next-line no-unused-vars
	Object.entries(obj).filter(([key, value]) => {
		if (value === null) return true;
		return !!value;
	});

const filterNullValuesFromObj = (obj) => Object.fromEntries(nonEmptyObjectValues(obj));

const filterObjByKeys = (obj, keys) => {
	// eslint-disable-next-line no-unused-vars
	const filteredEntriesByKeys = Object.entries(obj).filter(([key, value]) => keys.includes(key));

	return Object.fromEntries(filteredEntriesByKeys);
};

const validateEmptyBody = (body) => {
	if (!body || !Object.keys(body)?.length) throw new EmptyBodyError();
};

module.exports = { filterNullValuesFromObj, filterObjByKeys, validateEmptyBody };
