Feature: OrangeHRM ViewLogin

  Scenario Outline: Login with various credentials
    Given I login into the account for view info
    And I on the dashboard to see the main menu
    When I click the MyInfo menu
    Then I should see the MyInfo page
