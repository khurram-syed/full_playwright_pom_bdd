const { format } = require("node:path");
const browserName = process.env.BROWSER || 'chromium';

module.exports = {
  default: {
    paths: ['tests/feature/**/*.feature'],
    require: [
        'support/setup.ts',
        'tests/steps/**/*.ts',
      'support/**/*.ts'
    ],
    format: ["progress", "allure-cucumberjs/reporter:allure-results/allure.txt"],
    requireModule: ['ts-node/register'],
    publishQuiet: true,
    setTimeout: 60*1000,
    retry: 2
  }
};