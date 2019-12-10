var fs = require('fs');
var HomePage = require('../pages/home_page.js');
var DownloadPage = require('../pages/download_page.js');
//var testFile
var path = require('path');

module.exports = function() {
    this.Given(/^I click on the File Downloader link$/, function() {
        HomePage.clickFileDownloadLink();
        browser.pause("3000");
    });

    this.Then(/^I will download a .txt file$/, function() {
    //   testFile =  DownloadPage.downloadTestFile();
    //   testFile = testFile.toString();
    //     console.log(testFile);
        DownloadPage.downloadSomeFile();
        //console.log('some-file.txt');

      //DownloadPage.downloadTestFile();
    //   var downloadedFile = fs.readFileSync('test.txt', 'utf-8').toString();
    //   downloadedFile;
        const filePath = path.join(__dirname, '/~/Downloads/some-file.txt');
        console.log(filePath.toString());
        fs.readFileSync('~/Downloads/some-file.txt', function(err, data) {          
            console.log(data.toString()); 
        }); 
       //downloadedFile;
    });

    this.Then(/^I will print the contents of the test file in the console$/, function() {
    //    var downloadedFile = fs.readFileSync('testFile').toString();
    //    downloadedFile;
        // testFile = testFile.toString();
        // console.log(testFile);
    });
};