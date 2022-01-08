module.exports = {
  preset: 'jest-expo',
  testPathIgnorePatterns: [
    '/node_modules',
    '/android',
    '/ios'
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
  ],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
}