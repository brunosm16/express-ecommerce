const FIXED_MOCK_QUANTITY_LENGTH = 5;

const mockEntity = (entityBuilder, quantity = FIXED_MOCK_QUANTITY_LENGTH) => {
	const mockedUsers = [];

	for (let i = 0; i < quantity; i += 1) {
		mockedUsers.push(entityBuilder());
	}

	return mockedUsers;
};

module.exports = { mockEntity };
