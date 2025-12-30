@ui @tagsStub
Feature: 201-Tags Stub Check
     As a user, I want to stub the home page tags
        so I can check if it is showing correct info on the page

  @tagsStub2001
  Scenario: 2011-Verify the article
    Given user navigates to the "home" Page
    When user stubs the "tags"
    Then user should see following tags
      | Tags                                |
      | Test, QATest, Automation, QA Skills |
