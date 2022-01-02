/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: ['ts-jest', '@shelf/jest-mongodb'],
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
