const USER_PARAMS_TO_UPDATE = Object.freeze([
	'first_name',
	'last_name',
	'primary_email',
	'secondary_email',
	'date_of_birth',
	'current_password',
	'new_password',
	'admin',
]);

const ADDRESS_PARAMS_TO_CREATE_UPDATE = Object.freeze([
	'city',
	'state',
	'street',
	'district',
	'zipcode',
	'number',
]);

module.exports = { USER_PARAMS_TO_UPDATE, ADDRESS_PARAMS_TO_CREATE_UPDATE };
