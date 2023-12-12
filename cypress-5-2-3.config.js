const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2k5yog",
  e2e: {
    baseUrl: "https://sqlverifier-staging-08050d656f7a.herokuapp.com",

    // измененные тесты не будут отражаться на доске автоматически
    watchForFileChanges: false,

    setupNodeEvents(on, config) {
      //
    },
  },
});
