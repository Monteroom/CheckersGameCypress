const { defineConfig } = require("cypress");
module.exports = defineConfig({
  viewportWidth:1920,
  viewportHeight:1080,
  e2e: {
    baseUrl:"https://www.gamesforthebrain.com/game/checkers/",
    excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});