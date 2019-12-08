var HomePage = require('../pages/home_page.js');

module.exports = function() {
    this.Given(/^I navigate to "([^"]*)"$/, function(url) {
        browser.url("http://the-internet.herokuapp.com/");
    	var heroku = browser.getUrl();
    	expect(heroku).to.equal(url, `Current site url: '${heroku}' but expected message: '${url}'.`);
    });
    
};