var moduleNameMapper = require('jest-module-name-mapper');

module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**/test/**/*spec.ts?(x)'],
    testPathIgnorePatterns: ['/node_modules/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: moduleNameMapper.default('./tsconfig.json'),
};