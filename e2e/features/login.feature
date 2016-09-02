Feature: Log in

  Scenario: Enter correct login and password
    Given I navigate to login page
    When  I input 'default' to input-text email
    And   I input 'default' to input-text password
    And   I click on button SingIn
    Then  I should see welcome title 'Welcome to SportLynx!'