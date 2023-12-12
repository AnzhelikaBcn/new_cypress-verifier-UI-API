const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2k5yog",
  e2e: {
    baseUrl: "https://example.cypress.io",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      //
    },
  },
});
