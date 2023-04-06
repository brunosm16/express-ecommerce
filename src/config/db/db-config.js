const { NODE_ENV } = require('../../env/env-values');

const dbDefaultArgs = require('./db-default-args');
const defaultDbConfig = require('./default-db-config');
const testDbConfig = require('./test-db-config');

const isTest = NODE_ENV === 'test';
const dbConfiguration = isTest ? testDbConfig : defaultDbConfig;

module.exports = {
	...dbDefaultArgs,
	...dbConfiguration,
};
