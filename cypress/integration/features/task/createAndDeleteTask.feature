Feature: To create and delete tasks by the teacher.

  As a teacher I want to create and delete a new task so that the student can perform it

  Scenario: Teacher creates task as draft from room
    Given I am logged in as a 'teacher1' at 'brb'
    When I go to rooms overview
    And I go to room 'Course with subject and tasks'
    And I click on FAB to create new content
    And I click on New Task FAB
    Then I can see create task page
    # And file upload button is disabled
    When I enter title 'Cy Task Creating and Deleting Test'
    And I click on Enable Group Submission
    And I click on Draft Checkbox
    And I set task-visibility-start-date to 'today' at '0000'
    And I set task-visibility-due-date to 'tomorrow' at '1000'
    And I enter task description 'Dies ist Deine Aufgabe.'
    And I click on button Submit
    Then I can see room page 'Course with subject and tasks'
    And I can see task 'Cy Task Creating and Deleting Test'

Scenario: Teacher edits and publishes task from room via form
    Given I am logged in as a 'teacher1' at 'brb'
    When I go to rooms overview
    And I go to room 'Course with subject and tasks'
    When I click on three dot menu of content 'Cy Task Creating and Deleting Test'
    And I click on Edit in dot menu
    # Then file upload button is enabled
    When I enter title 'Cy Task Creating, Editing, Deleting Test'
    And I click on Enable Group Submission
    And I set task-visibility-start-date to 'today' at '0100'
    And I set task-visibility-due-date to 'tomorrow' at '1100'
    And I enter task description 'Dies ist Deine Aufgabe. Viel Erfolg!'
    And I click on Public Submission Checkbox
    And I click on Submit Public Submission in confirmation window on task page
    And I click on Draft Checkbox
    And I click on button Submit
    Then I can see room page 'Course with subject and tasks'
    And I can see task 'Cy Task Creating, Editing, Deleting Test'
    When I click on task 'Cy Task Creating, Editing, Deleting Test'
    Then description is 'Dies ist Deine Aufgabe. Viel Erfolg!'
    When I click on button Edit
    Then Public Submission is enabled
    And task-visibility-start-date is 'today' at '01:00'
    And task-visibility-due-date is 'tomorrow' at '11:00'
    And Draft is disabled

Scenario: Teacher deletes task from room
    Given I am logged in as a 'teacher1' at 'brb'
    When I go to rooms overview
    And I go to room 'Course with subject and tasks'
    When I click on three dot menu of content 'Cy Task Creating, Editing, Deleting Test'
    And I click on Delete in dot menu
    And I click on Cancel in confirmation window
    Then I can see task 'Cy Task Creating, Editing, Deleting Test'
    When I click on three dot menu of content 'Cy Task Creating, Editing, Deleting Test'
    And I click on Delete in dot menu
    And I click on Delete in confirmation window
    Then I can see room page 'Course with subject and tasks'
    And I can not see task 'Cy Task Creating, Editing, Deleting Test'
