Feature: OrangeHRM Login

  Scenario Outline: Login with various credentials
    Given I open the OrangeHRM login page
    When I fill in username "<username>" and password "<password>"
    And I click the login button
    Then I should see the login <outcome>

    Examples:
      | username        | password     | outcome |
      | Admin   | admin123 | success |
      | Mimin | admin123 | failure |
      | Admin    | admin   | failure |
