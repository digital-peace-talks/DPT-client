module.exports = {
  'Test home page' : function (browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('.v-btn', 1000)
      .click('.v-btn')
      .pause(1000)
      .waitForElementVisible('.headline',3000)

      // .click('button[name=btnG]')
      // .assert.containsText('#main', 'Night Watch')
      .end();
  }
};