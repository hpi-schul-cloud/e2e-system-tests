@api_migrated
@release
@unstable_test
Feature: Help Section - To use the help areas in dBildungscloud

  As a teacher I want to use the help areas in the header and sidebar so that I can find help when needed

  Scenario Outline: teacher can use the help area in the (header, sidebar), search article and submit an issue via contact form
    Given I am logged in as a '<teacher>' at '<namespace>'
    When I click on the question icon in header
    And I click on help section in header
    Then I can see the help articles page
    When I click on the question icon in header
    And I click on send request or problem in header
    Then I can see the help contact page
    When I click on the question icon in header
    And I click on advanced trainings in header
    #Then a new tab in browser opens

    # use the help area in the sidebar
    When I go to help section in sidebar
    Then I can see the help articles page
    When I go to help articles in sidebar
    Then I can see the help articles page
    When I go to contact in sidebar
    Then I can see the help contact page
    When I go to advanced trainings in sidebar
    #Then a new tab in browser opens

    # use the article search inside the help articles area
    When I go to help section in sidebar
    Then I can see the help articles page
    When I enter keyword in search bar
    Then I can see an help article related to my search

    # submit an issue via contact form inside help area
    When I go to help section in sidebar
    When I go to contact in sidebar
    Then I can see the help contact page
    When I fill out the contact form
    Then I can send it to the support

    @school_api_test
    @staging_test
    Examples:
      | teacher      | namespace |
      | teacher1_brb | brb       |