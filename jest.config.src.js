'use strict';

module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/__tests__/**/*.test.{js,jsx}'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
  transformIgnorePatterns: ['/node_modules/'],
};