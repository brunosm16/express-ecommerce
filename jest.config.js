module.exports = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**",
        "!src/main.js",
        "!src/database/migrations/*",
    ],
    maxWorkers: 1,
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.test.js?(x)"],
    verbose: true,
};
