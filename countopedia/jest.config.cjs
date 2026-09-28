module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleNameMapper: {
    "\\.(png|jpe?g|gif|svg)$": "<rootDir>/test/fileMock.cjs",
  },
};
