Feature: Log in

  Scenario: Enter correct login and password
    Given I navigate to homepage
    When  I input email to input-text email
    And   I input password to input-text password
    And   I click on button SingIn
    Then  I should see welcome title