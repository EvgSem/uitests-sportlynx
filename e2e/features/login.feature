Feature: Log in

  Scenario: Enter correct login and password
  	Given I clear all cookies
    And   I navigate to login page
    When  I input 'default' to input-text email
    And   I input 'default' to input-text password
    And   I click on button SingIn
    Then  I should see welcome title 'Welcome to SportLynx!'
    And   I click on menu item Manage your account
    And   I click on menu item Log out
  	And   I clear all cookies

   Scenario: Enter incorrect login and password
    Given I clear all cookies
    And   I navigate to login page
    When  I input 'test@mail.com' to input-text email
    And   I input 'test' to input-text password
    And   I click on button SingIn
    Then  I should see paragraph 'Access denied' 