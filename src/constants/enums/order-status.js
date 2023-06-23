const status = {
	canceled: 'Canceled',
	completed: 'Completed',
	failed: 'Failed',
	pending: 'Pending payment',
	processing: 'Processing',
};

const statusEnums = Object.freeze(Object.values(status));
const statusEnumsObject = Object.freeze(status);
const defaultStatus = status.pending;
module.exports = { statusEnums, defaultStatus, statusEnumsObject };
