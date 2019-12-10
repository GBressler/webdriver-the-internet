Feature: Heroku
  Background:
    Given I navigate to "http://the-internet.herokuapp.com/"

  # Scenario: Test Dropdown links - Passing
  #   When I click on Dropdown link
  #   Then I select Option 1
  #   Then I will verify that Option 1 is selected
  #   Then I select Option 2
  #   Then I will verify that Option 2 is selected

  # Scenario: Test Form Authentication - Passing
  #   Given I click on Form Authentication link
  #   Then I fill in the username with: "user"
  #   Then I fill in the password with: "SuperSecretPassword!"
  #   When I append '@email.com' to the username so it is: "username@email.com"
  #   Then I click the login button
  #   Then I will see an error
  #   When I fill in the username and password fields with the correct values
  #   Then Click the login button again
  #   Then I will see the user is logged in

  # Scenario: Test Checkboxes links - Passing
  #   Given I click on the Checkbox link
  #   Then I check Checkbox 1
  #   Then I will verify that Checkbox 1 is checked
  #   Then I uncheck Checkbox 2
  #   Then I will verify that Checkbox 2 is NOT checked

  # Scenario: Test Dynamic Content link
  #   Given I click on the Dynamic Content link
  #   Then print in the console the link to the avatar
  #   Then print the text of each post
  #   Then take a screenshot
  #   When I refresh the page
  #   Then print in the console the link to the avatar again
  #   Then print the text of each post as well
  
  Scenario: Test Downloading Files
    Given I click on the File Downloader link
    Then I will download a .txt file
    Then I will print the contents of the test file in the console
    
  # Scenario: Test Allure Report creation - Completed - This will not be used as a Scenario
  #   Given I have Allure installed
  #   Then I will make a report to show the run

  # Scenario: Test Drag and Drop
  #   Given There is Box A and Box B
  #   Then I will drag Box A into B and Box B into A
    