@ui @login
Feature: 2-Login Page
     As a site user, I want to use Login Page so I can login to my account.

  @login21
  Scenario: 21-Verify successfull Login Page
    Given user navigates to the "login" Page
    When user enters the following login details
      | Username              | Password |
      | emailkasyed@gmail.com | 12345678 |
    Then user should be logged in successfully with user "kasyed"

  @login22
  Scenario: 22-Verify Invalid Login Page
    Given user navigates to the "login" Page
    When user enters the following login details
      | Username              | Password |
      | emailkasyed@gmail.com | 12345677 |
    Then user should see message "email or password is invalid"
