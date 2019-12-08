var HomePage = require('../pages/home_page.js');
var FormAuthenticationPage = require('../pages/form_authentication_page.js');
var SecureAreaPage = require('../pages/secure_area_page.js');

module.exports = function() {
    this.Given(/^I click on Form Authentication link$/, function() {
        HomePage.clickFormAuthenticationLink();
        browser.pause("3000");
    });

    this.Then(/^I fill in the username with: "([^"]*)"$/, function(user) {
        FormAuthenticationPage.setUsername(user);
    });

    this.Then(/^I fill in the password with: "([^"]*)"$/, function(password) {
        FormAuthenticationPage.setPassword(password);
    });

    this.When(/^I append '@email.com' to the username so it is: "([^"]*)"$/, function(emailFormat) {
        FormAuthenticationPage.usernameField.setValue(emailFormat);
        // var user = FormAuthenticationPage.usernameField;
        // console.log(user);
        // expect(user).to.equal("username@email.com");
    });

    this.Then(/^I click the login button$/, function() {
        FormAuthenticationPage.clickLoginButton();
        browser.pause("2000");
    });

    this.Then(/^I will see an error$/, function() {
        FormAuthenticationPage.getErrorMessage();
    });

    this.When(/^I fill in the username and password fields with the correct values$/, function() {
        FormAuthenticationPage.setUsername("tomsmith");
        FormAuthenticationPage.setPassword("SuperSecretPassword!");
    });

    this.Then(/^Click the login button again$/, function() {
        FormAuthenticationPage.clickLoginButton();
        browser.pause("5000");
    });

    this.Then(/^I will see the user is logged in$/, function() {
        var message = SecureAreaPage.getSuccessMessage();
        var logged_in = browser.getUrl();
        expect(logged_in).to.equal("http://the-internet.herokuapp.com/secure", `Current site url: '${logged_in}`);
        expect(message).to.contain("You logged into a secure area!", `Message was: '${message}'`);
    });


};