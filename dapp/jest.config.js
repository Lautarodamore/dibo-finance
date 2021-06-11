/* eslint-disable @typescript-eslint/no-var-requires */
const jestPreset = require('./jest-preset');

module.exports = {
    ...jestPreset,
    transform: {
        ...jestPreset.transform,
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts'
    ],
    setupFiles: [
        'react-app-polyfill/jsdom'
    ],
    testEnvironment: 'jest-environment-jsdom-fourteen',
    moduleNameMapper: {
        ...jestPreset.moduleNameMapper,
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
    },
    cacheDirectory: '.cache/jest',
};
