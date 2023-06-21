const status = {
	canceled: 'Canceled',
	completed: 'Completed',
	failed: 'Failed',
	pending: 'Pending payment',
	processing: 'Processing',
};

const orderStatusEnums = Object.freeze(Object.values(status));
const defaultOrderStatus = status.pending;
module.exports = { orderStatusEnums, defaultOrderStatus };
