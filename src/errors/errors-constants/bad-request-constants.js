const { EntityExistsError, NotFoundError } = require('../errors-types');

const badRequestErrorsInstances = [EntityExistsError, NotFoundError];

const badRequestErrorsTypes = ['TokenExpiredError', 'TypeError'];

module.exports = { badRequestErrorsInstances, badRequestErrorsTypes };
