@ui @home
Feature: 1-Home Page
     As a user, I want to use Home Page so I can use all its feature.

  @home11
  Scenario: 11-Verify Login Page
    Given user navigates to the "home" Page
    When user clicks on "Your Feed"
    Then user should be on the log-in page

  @home12
  Scenario: 12-Verify Login Page
    Given user navigates to the "home" Page
    When user clicks on "Your Feed"
    Then user should see the log1 in page
