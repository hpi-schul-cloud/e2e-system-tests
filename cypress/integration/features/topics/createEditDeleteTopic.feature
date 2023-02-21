@unstable_test
Feature: Topics - To create, edit and delete topics by the teacher.

  As a teacher I want to create, edit and delete a new topic so that the student can see it

  Scenario: Teacher creates topic from room
    Given I am logged in as a 'teacher1' at 'brb'
    When I go to rooms overview
    And I go to room 'Course with subject and tasks'
    And I click on FAB to create new content
    And I click on New Topic FAB
    Then I can see edit topic page '-'
    When I enter topic title 'Cy Topic Creating and Deleting Test'
    When I click on button Add Text to topic
    Then I can see form element Text
    When I enter title "Cy Title for Text Element in Topic" into element Text
    When I enter description 'Cy this is the description of the topic. It is used for automated Cypress tests.' into element Text
    When I click on button Add GeoGebra to topic
    When I enter title "Cy Title for GeoGebra Element in Topic" into element GeoGebra
    When I enter GeoGebra material ID 'kEBfU7AR'
    When I click on button Add Learning Material to topic
    When I enter title 'Cy Title for Learning Material Element in Topic' into element Learning Material
    Then I see second learning material button in the content area
    # currently step for adding material is excluded because this process is via new browser window
    When I click on button Add Etherpad to topic
    When I enter title 'Cy Title for Etherpad Element in Topic' into element Etherpad
    When I enter description for the ether pad 'this is my epad description'
    When I click on button Add Task to topic
    When I enter title 'Cy Title for Task Element in Topic' into element Task
    When I enter URL of the task from the another course 'https://brb-main.cd.dbildungscloud.dev/homework/59cce3f6c6abf042248e888d'
    When I click on create button to create topic
    Then I can see edit topic page 'Cy Topic Creating and Deleting Test'
    # When I add file to element Text
    When I click on save button to save changes
    Then I see topic detail page "Cy Topic Creating and Deleting Test" with content elements "Cy Title for Text Element in Topic", "Cy Title for GeoGebra Element in Topic", "Cy Title for Learning Material Element in Topic", "Cy Title for Etherpad Element in Topic" and "Cy Title for Task Element in Topic"
    When I click on last breadcrump element in topbar navigation
    Then I can see content 'Cy Topic Creating and Deleting Test' on course page

  Scenario: Teacher edits topic from room
    # Given I am logged in as a 'teacher1' at 'brb'
    # When I go to rooms overview
    # And I go to room 'Course with subject and tasks'
    # When I click on three dot menu of topic 'Cy Topic Creating and Deleting Test'
    # When I click on Edit in dot menu of topic

  Scenario: Teacher deletes topic from room
    Given I am logged in as a 'teacher1' at 'brb'
    When I go to rooms overview
    When I go to room 'Course with subject and tasks'
    When I click on three dot menu of topic 'Cy Topic Creating and Deleting Test'
    When I click on Delete in dot menu of topic
    When I click on Cancel in confirmation window
    Then I can see content 'Cy Topic Creating and Deleting Test' on course page
    When I click on three dot menu of topic 'Cy Topic Creating and Deleting Test'
    When I click on Delete in dot menu of topic
    When I click on Delete in confirmation window
    Then I can not see content 'Cy Topic Creating and Deleting Test'
