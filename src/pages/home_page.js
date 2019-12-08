'use strict';

class HomePage {

    get siteUrl() { return browser.getUrl(); }
    get dropdownLink() { return browser.element("//*[@id='content']/ul/li[11]/a"); }
    get formAuthenticationLink() { return browser.element("div#content > ul > li:nth-child(21)"); }
    get checkboxesLink() { return browser.element("div#content > ul > li:nth-child(6)"); }
    get dynamicContentLink() { return browser.element("div#content > ul > li:nth-child(12)"); }
    get fileDownloadLink() { return browser.element("div#content > ul > li:nth-child(17)"); }
    get dragAndDropLink() { return browser.element("div#content > ul > li:nth-child(10)"); }


    clickDropdownLink(){
        this.dropdownLink.waitForVisible();
        this.dropdownLink.click();
    }

    clickFormAuthenticationLink(){
        this.formAuthenticationLink.waitForVisible();
        this.formAuthenticationLink.click();
    }

    clickCheckboxesLink(){
        this.checkboxesLink.waitForVisible();
        this.checkboxesLink.click();
    }

    clickDynamicContent(){
        this.dynamicContentLink.waitForVisible();
        this.dynamicContentLink.click();
    }

    clickFileDownloadLink(){
        this.fileDownloadLink.waitForVisible();
        this.fileDownloadLink.click();
    }

    clickDragAndDropLink(){
        this.dragAndDropLink.waitForVisible();
        this.dragAndDropLink.click();
    }
}

module.exports = new HomePage();