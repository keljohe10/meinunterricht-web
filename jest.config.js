module.exports = {
  moduleFileExtensions: [
    "js"
  ],
  testMatch: [
    "**/tests/**/*.(test|spec).(js)"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
  ],
  coverageReporters: [
    "json",
    "lcov",
    "text",
    "text-summary"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/__mocks__/mocks.js",
    "\\.(css|less|scss)$": "<rootDir>/tests/__mocks__/mocks.js",
    "^@/api(.*)$": "<rootDir>/api$1",
    "^@/components(.*)$": "<rootDir>/components$1",
    "^@/containers(.*)$": "<rootDir>/containers$1",
    "^@/layouts(.*)$": "<rootDir>/layouts$1",
    "^@/lib(.*)$": "<rootDir>/lib$1",
    "^@/pages(.*)$": "<rootDir>/pages$1",
    "^@/providers(.*)$": "<rootDir>/providers$1",
    "^@/stores(.*)$": "<rootDir>/stores$1",
    "^@/tests(.*)$": "<rootDir>/tests$1",
    "^@/utils(.*)$": "<rootDir>/utils$1"
  }
};
