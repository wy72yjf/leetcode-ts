module.exports = {
  moduleFileExtensions: [
    'ts',
    'js',
    'json'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/code/$1'
  },
  testMatch: [
    '**/test/**/*.spec.(js|ts)|**/__test__/*.(js|ts)'
  ]
}
