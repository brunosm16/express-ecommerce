const { OPERATION_SUCCESS_CODE } = require('../../http/operation-errors-codes');

class ParanoidTableOperation {
	constructor(isSoftOperation, operationCode) {
		this.isSoftOperation = isSoftOperation;
		this.operationCode = this.isSoftOperation ? OPERATION_SUCCESS_CODE : operationCode;
	}
}

module.exports = ParanoidTableOperation;
