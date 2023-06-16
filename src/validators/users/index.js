const create = require('./create');
const findAll = require('./find-all');
const findById = require('./find-by-id');
const remove = require('./remove');
const update = require('./update');
const login = require('./login');
const createResetToken = require('./create-reset-token');

module.exports = {
	create,
	findAll,
	findById,
	login,
	remove,
	update,
	createResetToken,
};
