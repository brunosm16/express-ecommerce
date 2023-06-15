const { findUserById } = require('../../services/users/find-user');

module.exports = async (req) => findUserById(req);
