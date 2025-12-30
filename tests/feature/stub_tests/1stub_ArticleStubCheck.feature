@ui @articleStub
Feature: 200-Article Stub Check
     As a user, I want to stub the home page article
        so I can check if it is showing correct info on the page

  @articleStub2001
  Scenario: 2001-Verify the article
    Given user navigates to the "home" Page
    When user stubs the "articles"
    Then user should see the following "1st" article details on the page
      | title              | description                       | favoritesCount |
      | Automation Academy | Automation Academy's unique place |            888 |
