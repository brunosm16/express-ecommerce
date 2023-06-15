const USERS_PARAMS_TO_PERSIST = Object.freeze([
	'id',
	'full_name',
	'email',
	'password_hash',
	'is_admin',
]);

const USER_PARAMS_TO_EXPOSE = Object.freeze(['id', 'full_name', 'email']);

module.exports = { USERS_PARAMS_TO_PERSIST, USER_PARAMS_TO_EXPOSE };
