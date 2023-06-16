const USERS_PARAMS_TO_PERSIST = Object.freeze([
	'id',
	'full_name',
	'email',
	'password_hash',
	'is_admin',
	'token_reset_password',
	'token_reset_password_expire_date',
]);

const USER_PARAMS_TO_EXPOSE = Object.freeze(['id', 'full_name', 'email']);

module.exports = {
	userParamsToPersist: USERS_PARAMS_TO_PERSIST,
	userParamsToExpose: USER_PARAMS_TO_EXPOSE,
};
