Feature: To create and delete tasks by the teacher.

  As a teacher I want to create a new task so that the student can perform it

  Scenario: Teacher creates task as draft from room
    Given I am logged in as a 'teacher1' at 'brb'
    When I go to rooms overview
    And I go to room 'Course with subject and tasks'
    And I click on FAB to create new content
    And I click on New Task
    Then I can see create task page
    # And file upload button is disabled
    When I enter title 'Task Creation and Deletion Test'
    And I click on Enable Group Submission
    And I click on Draft
    And I set task-visibility-start-date to 'today' at '0000'
    And I set task-visibility-due-date to 'tomorrow' at '1000'
    And I enter task description 'Dies ist Deine Aufgabe.'
    And I click on button Submit
    Then I can see room page 'Course with subject and tasks'
    And I can see task 'Task Creation and Deletion Test'

Scenario: Teacher deletes task from room
    Given I am logged in as a 'teacher1' at 'brb'
    When I go to rooms overview
    And I go to room 'Course with subject and tasks'
    When I click on three dot menu of content 'Task Creation and Deletion Test'
    And I click on Delete in dot menu
    And I click on Cancel in confirmation window
    Then I can see task 'Task Creation and Deletion Test'
    When I click on three dot menu of content 'Task Creation and Deletion Test'
    And I click on Delete in dot menu
    And I click on Delete in confirmation window
    Then I can see room page 'Course with subject and tasks'
    And I can not see task 'Task Creation and Deletion Test'
