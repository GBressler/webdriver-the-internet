'use strict';

class DownloadPage {
    get testFile() { return browser.element("#content > div > a:nth-child(18)"); }
    //get someFile() { return browser.element("#content > div > a"); }
    get someFile() { return browser.element("#content > div > a:nth-child(2)"); }
    
   
    downloadTestFile() {
        this.testFile.click();
    }

    downloadSomeFile() {
        this.someFile.click();
    }

}

module.exports = new DownloadPage();