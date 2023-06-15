const TableResultCode = require('../instances/table-result-code');

const makeTableResultCode = (code) => new TableResultCode(code);

module.exports = { makeTableResultCode };
