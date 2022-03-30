const { resolve } = require("path");
const root = resolve(__dirname);

module.exports = {
  verbose: true,
  rootDir: root,
  displayName: "pharma-inc-tests",
  collectCoverageFrom: ["<rootDir>/test/**/*.ts", "<rootDir>/src/**/*.ts"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/utils/seeds/",
    "<rootDir>/src/database/entity/",
  ],
  testEnvironment: "node",
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  transform: tsjPreset.transform,

  // coverageThreshold: {
  //   global: {
  //     branches: 0,
  //     functions: 0,
  //     lines: 0,
  //     statements: 0,
  //   },
  // },
};
