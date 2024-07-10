@api_migrated
@release
@stable_test
Feature: Help Section - To use the help areas in dBildungscloud

  As a teacher I want to use the help areas in the header and sidebar so that I can find help when needed

  Scenario Outline: teacher can use the help area in the (header, sidebar), search article and submit an issue via contact form
    Given I am logged in as a '<teacher>' at '<namespace>'
    When I click on Help Section in sidebar
    When I click on Help articles in sidebar
    Then I see the help articles page
    When I click on Contact in sidebar
    Then I see the help contact page
    When I click on  Advanced trainings in sidebar
    #Then a new tab in browser opens

    # use the article search inside the help articles area
    When I click on Help articles in sidebar
    When I enter keyword in search bar for help articles
    Then I see an help article related to my search

    # submit an issue via contact form inside help area
    When I click on Contact in sidebar
    Then I see the help contact page
    When I fill out the contact form
    When I click on button Submit to send form
    Then I see confirmation for sended form

    @school_api_test
    @staging_test
    Examples:
      | teacher      | namespace |
      | teacher1_brb | brb       |