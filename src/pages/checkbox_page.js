'use strict';

class CheckboxPage {
    get checkbox1() { return browser.element("#checkboxes > input[type=checkbox]:nth-child(1)"); }
    get checkbox2() { return browser.element("#checkboxes > input[type=checkbox]:nth-child(3)"); }
   
    selectCheckbox1() {
        this.checkbox1.click();
    }

    selectCheckbox2() {
        this.checkbox2.click();
    }

}

module.exports = new CheckboxPage();