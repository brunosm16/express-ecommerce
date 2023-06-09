const ADDRESS_PARAMS_TO_PERSIST = Object.freeze([
	'building_number',
	'city',
	'state',
	'street',
	'zip_code',
	'user_id',
]);

const ADDRESS_PARAMS_TO_EXPOSE = Object.freeze([
	'building_number',
	'city',
	'state',
	'street',
	'zip_code',
]);

module.exports = {
	addressParamsToPersist: ADDRESS_PARAMS_TO_PERSIST,
	addressParamsToExpose: ADDRESS_PARAMS_TO_EXPOSE,
};
