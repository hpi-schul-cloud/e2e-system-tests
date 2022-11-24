@help @stable_test
Feature: Help Section - To use the help areas in dBildungscloud

  As a teacher I want to use the help areas in the header and sidebar so that I can find help when needed

  Scenario: Use the help area in the header
    Given I am logged in as a 'teacher' at 'brb'
    When I click on the question icon in header
    And I click on help section in header
    Then I can see the help articles page
    When I click on the question icon in header
    And I click on send request or problem in header
    Then I can see the help contact page
    When I click on the question icon in header
    And I click on advanced trainings in header
    #Then a new tab in browser opens

  Scenario: Use the help area in the sidebar
    Given I am logged in as a 'teacher' at 'brb'
    When I go to help section in sidebar
    Then I can see the help articles page
    When I go to help articles in sidebar
    Then I can see the help articles page
    When I go to contact in sidebar
    Then I can see the help contact page
    When I go to advanced trainings in sidebar
    #Then a new tab in browser opens

  Scenario: Use the article search inside the help articles area
    Given I am logged in as a 'teacher' at 'brb'
    When I go to help section in sidebar
    Then I can see the help articles page
    When I enter keyword in search bar
    Then I can see an help article related to my search

  Scenario: Submit an issue via contact form inside help area
    Given I am logged in as a 'teacher' at 'brb'
    When I go to help section in sidebar
    When I go to contact in sidebar
    Then I can see the help contact page
    When I fill out the contact form
    Then I can send it to the support