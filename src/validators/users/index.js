const create = require('./create');
const findAll = require('./find-all');
const findById = require('./find-by-id');
const remove = require('./remove');
const update = require('./update');
const login = require('./login');

module.exports = {
	create,
	findAll,
	findById,
	login,
	remove,
	update,
};
