const { defaults } = require('jest-config');
module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  rootDir: '.',
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
  moduleDirectories: ['node_modules', __dirname],
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  cache: false,
  setupTestFrameworkScriptFile: '<rootDir>/__tests__/setup/setupEnzyme.js',
  testPathIgnorePatterns: ['<rootDir>/__tests__/setup/setupEnzyme.js', '<rootDir>/__tests__/staticProps'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
  }
};
