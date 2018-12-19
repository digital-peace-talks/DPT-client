// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage


// eslint-disable-next-line no-unused-vars
const nightwatch = require('nightwatch');

/**
 * The main test
 * @param {nightwatch.NightwatchBrowser} browser 
 */
function main(browser) {
  browser
    .url(process.env.VUE_DEV_SERVER_URL)
    .waitForElementVisible('body', 1000)
    .waitForElementVisible('.v-btn', 1000)
    .click('.v-btn')
    .pause(1000)
    .waitForElementVisible('.headline', 3000)
    .assert.elementCount('body', 1)
    .end();
}

module.exports = {
  'default e2e tests': main
}
