@api @api100
Feature: 100-API Articles Check
   As an api user, I want to check if the articles are returning as expected,
       so that I can view them

  @api1001
  Scenario: 1001- Verify API Get articles request
    When user send the GET request to endpoint "articles"
    Then user should see the following values on "1st" record
      | ArticlesCount | Title                   | Body              |
      |            10 | Discover Bondar Academy | Bondar Academy is |
    And schema should have following fields in articles
      | FieldName      | FieldType |
      | slug           | string    |
      | title          | string    |
      | favoritesCount | number    |
    And schema should match "articles" data file
