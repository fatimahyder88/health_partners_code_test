const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  chromeWebSecurity: false,
  viewportWidth: 1000,
  viewportHeight: 660,
  requestTimeout: 5000,
  responseTimeout: 600000,
  env: {
    baseUrl: "https://www.amazon.co.uk/",
  },
  e2e: {
    specPattern: "**/e2e/**/*.cy.js",
    screenshotOnRunFailure: true,
    video: true,
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
