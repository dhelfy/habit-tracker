import type { Config } from 'jest';

const config: Config = {
    rootDir: './',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
        "\\.(gif|ttf|eot|svg|png|jpg)$": "<rootDir>/test/mocks/fileMock.js"
    },
    
}

export default config