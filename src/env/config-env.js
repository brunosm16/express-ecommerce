const dotenv = require('dotenv');

const { TEST_ENV, DEFAULT_ENV } = require('../constants/env-files');

const { NODE_ENV } = process.env;

const envs = {
	test: TEST_ENV,
	development: DEFAULT_ENV,
};

const path = envs[NODE_ENV] ?? DEFAULT_ENV;

dotenv.config({ path });
