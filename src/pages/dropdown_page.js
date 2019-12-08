'use strict';

class DropdownPage {
    get dropDownMenu() { return browser.element("//*[@id='dropdown']"); }
    get option1() { return browser.element("select#dropdown > option:nth-child(2)"); }
    get option2() { return browser.element("select#dropdown > option:nth-child(3)"); }

    clickDropDownMenu() {
        this.dropDownMenu.waitForVisible();
        this.dropDownMenu.click();
    }

    selectOption1() {
        this.option1.click();
    }

    selectOption2() {
        this.option2.click();
    }

}

module.exports = new DropdownPage();