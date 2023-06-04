const { makeTable } = require('./make-table');

const usersTable = makeTable('user_id', 'users');

module.exports = Object.freeze({
	table: 'addresses',
	relations: [usersTable],
});
