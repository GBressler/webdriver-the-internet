var HomePage = require('../pages/home_page.js');
var CheckboxPage = require('../pages/checkbox_page.js');

module.exports = function() {
    this.Given(/^I click on the Checkbox link$/, function() {
        HomePage.clickCheckboxesLink();
        browser.pause("3000");
    });

    this.Then(/^I check Checkbox 1$/, function() {
        CheckboxPage.selectCheckbox1();
        browser.pause("3000");
    });

    this.Then(/^I will verify that Checkbox 1 is checked$/, function() {
        var checkbox1 = $('[type="checkbox"]');
        var checkbox1 = checkbox1.isSelected();
        expect(checkbox1).to.equal(true);
    });

    this.Then(/^I uncheck Checkbox 2$/, function() {
        CheckboxPage.selectCheckbox2();
        browser.pause("3000");
    });

    this.Then(/^I will verify that Checkbox 2 is NOT checked$/, function() {
        var checkbox2 = $("#checkboxes > input[type=checkbox]:nth-child(3)");
        var checkbox2 = checkbox2.isSelected();
        expect(checkbox2).to.not.equal(true);
    });
};