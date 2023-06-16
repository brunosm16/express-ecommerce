const create = require('./create');
const remove = require('./remove');
const findAll = require('./find-all');
const findById = require('./find-by-id');
const login = require('./login');
const update = require('./update');
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
