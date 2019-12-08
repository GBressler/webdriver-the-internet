var HomePage = require('../pages/home_page.js');
var DropdownPage = require('../pages/dropdown_page.js');

module.exports = function() {
    this.When(/^I click on Dropdown link$/, function() {
        HomePage.clickDropdownLink();
        browser.pause("3000");
    });

    this.Then(/^I select Option 1$/, function() {
        DropdownPage.clickDropDownMenu();
        DropdownPage.selectOption1();
        browser.pause("3000");
    });

    this.Then(/^I will verify that Option 1 is selected$/, function() {
        var option1 = $('[value="1"]');
        var dropdown1 = option1.isSelected();
        expect(dropdown1).to.equal(true);
    });

    this.Then(/^I select Option 2$/, function() {
        DropdownPage.selectOption2();
        browser.pause("3000");
    });

    this.Then(/^I will verify that Option 2 is selected$/, function() {
        var option2 = $('[value="2"]');
        var dropdown2 = option2.isSelected();
        expect(dropdown2).to.equal(true);
    });
};