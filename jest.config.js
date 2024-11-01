
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!axios)/',
    ],
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
};
