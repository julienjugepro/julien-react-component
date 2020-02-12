module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.scss$": "sass-jest"
  },
  setupFiles: ["<rootDir>/test/setupTests.js"]
};
