Feature: OrangeHRM Logout

  Scenario Outline: Logout after login
    Given I login into the account
    And I on the dashboard
    When I click the profile menu
    And I click the logout button
    Then I should see the login page
