const mockEntity = (entityBuilder, quantity = 5) => {
	const mockedUsers = [];

	for (let i = 0; i < quantity; i += 1) {
		mockedUsers.push(entityBuilder());
	}

	return mockedUsers;
};

module.exports = { mockEntity };
