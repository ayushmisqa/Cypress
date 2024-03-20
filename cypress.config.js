const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  
  e2e: {
    baseUrl: 'https://cfg-sgl-ui-qa.ad.moodys.net/issuerlist',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    auth_username: process.env.AUTH_USERNAME,
    auth_password: process.env.AUTH_PASSWORD,
    okta_domain: process.env.REACT_APP_OKTA_DOMAIN,
    okta_client_id: process.env.REACT_APP_OKTA_CLIENTID,
  },

});
