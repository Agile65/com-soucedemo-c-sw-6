@regression @smoke
Feature:As a user I want to login into saucedemo website

  Scenario: User should login successfully with valid credentials
    Given I am on homepage
    And I enter email "standard_user"
    And I enter password "secret_sauce"
    And I click on login button
    Then I should see text "Products"

  Scenario: Verify that six products are displayed on page
    Given I am on homepage
    And I enter email "standard_user"
    And I enter password "secret_sauce"
    And I click on login button
    Then I can see products "6"

