module.exports = {
  moduleNameMapper: {
    "^((?!discord).*?).js$": "$1",
  },
  preset: "ts-jest",
  roots: ["<rootDir>/tests/esm"],
  testEnvironment: "node",
  testRegex: "/*.test.ts",
  transform: {},
};
