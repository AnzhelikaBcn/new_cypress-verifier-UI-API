const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2k5yog",
  e2e: {
    baseUrl: "https://example.cypress.io",

    // измененные тесты не будут отражаться на доске автоматически
    //watchForFileChanges: false,

    setupNodeEvents(on, config) {
      //
    },
  },
});
