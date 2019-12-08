'use strict';

class SecureAreaPage {

	get successMessage() { return browser.element("div.flash.success"); }


    getSuccessMessage(){
        this.successMessage.waitForVisible();
        return this.successMessage.getText().trim().replace(/\r?\n|\r/,"");
    }

}

module.exports = new SecureAreaPage();