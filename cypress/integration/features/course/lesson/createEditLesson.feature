Feature: Teacher manages the topic or lesson in the course

  As a teacher I want to create and edit the topic or lesson in the course so that I manage my topics in the course.

  Scenario: teacher creates a new topic or lesson with content

    Given I am logged in as a 'teacher' at 'brb'
    When I go to rooms overview
    And I go to room 'Mathe'
    And I click on FAB to create new content
    And I click on new topic FAB
    Then I see new topic creation page
    And I enter the topic title 'this is my topic name'
    Then I click on add text button
    And I enter text content title 'my text content'
    And I enter description into CK Editor 'this is text description'
    Then I click on add GeoGebra worksheet button
    And I enter the title 'my GeoGebra content'
    And I enter test GeoGebra material ID 'kEBfU7AR'
    Then I click on add learning material button
    And I enter the title 'my learning material'
    And I see second learning material button in the content area
    Then I click on add Etherpad button
    And I enter the title 'my etherpad'
    And I enter description for the ether pad 'this is my epad description'
    Then I click on add task button to embed the task from another course
    And I enter the title 'my task from another course'
    And I enter the URL of the task from the another course 'https://brb-main.cd.dbildungscloud.dev/homework/59cce3f6c6abf042248e888d'
    Then I click on create button
    Then I can see room page 'Mathe'
    Then I see the topic card named 'this is my topic name'
    Then I see publish button on the topic card 'this is my topic name'

  Scenario: teacher edits a new topic or lesson

    Given I am logged in as a 'teacher' at 'brb'
    When I go to rooms overview
    And I go room 'Mathe'
    Then I see the card for the topic 'this is my topic name'
    When I click on three dot menu of content 'this is my topic name'
    And I click on Edit in three dot menu
    Then I see the edit page for the topic 'this is my topic name'
    And I edit the title of the topic to 'this is edited topic name'
    Then I click on save button
    Then I can see room page 'Mathe'
    Then I see the topic card named 'this is edited topic name'
    Then I see publish button on the topic card 'this is edited topic name'