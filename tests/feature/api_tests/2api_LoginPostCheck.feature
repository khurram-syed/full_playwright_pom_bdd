@api @api101
Feature: 101-API Login Check
   As an api user, I want to do the login, so I can use the features

  @api1011
  Scenario: 1001- Verify API POST Login request
    When user send the POST request "users/login" with username and password
    Then user should see "200" status
    And user should see "token" exists
    When user sends the GET request "articles" with token
    Then user should see first article with title "New Article"
