'use strict';

class FormAuthenticationPage {
    get usernameField() { return browser.element("#username"); }
    get passwordField() { return browser.element("#password"); }
    get loginButton() { return browser.element("form#login > button > i"); }
    get errorMessage() { return browser.element("div.flash.error"); }

    
    
    setUsername(username) {
        this.usernameField.waitForVisible();
        this.usernameField.setValue(username);
    }

    setPassword(password) {
        this.passwordField.waitForVisible();
        this.passwordField.setValue(password);
    }

    clickLoginButton() {
        this.loginButton.click();
    }

    getErrorMessage() {
        this.errorMessage.waitForVisible();
        return this.errorMessage.getText().trim().replace(/\r?\n|\r/,"");
    }

    
}

module.exports = new FormAuthenticationPage();