Feature: To create and delete tasks by the teacher.

  As an teacher I want to create a new task so that the student can perform it

  Scenario: Teacher creates task as draft from room
    Given I am logged in as a 'teacher1' at 'brb'
    When I go to rooms overview
    And I go to room 'Course with subject and tasks'
    # And I click on Create
    # And I click on New Task
    # Then I can see create edit page
    # And file upload button is disabled
    # When I enter title 'E2E task'
    # And I click on Enable Group Submission
    # And I enable Draft
    # And I set task-visibility-start-date: today, 00:00
    # And I set task-processing-end-date: today +1 day, 10:00
    # And I enter task description 'Dies ist Deine Aufgabe.'
    # And I click on Save
    # Then I can see room page 'Course with subject and tasks'
    # And I can see task 'E2E task'

# Scenario: Teacher deletes task from room
#    When I click on three dots of task 'Create and delete task from room'
#    And I click on Delete
#    Then a confirmation panel is visible
#    When I click on Cancel
#    And I can see task 'Create and delete task from room'
#    When I click on three dots of task 'E2E task from room'
#    And I click on Delete
#    Then a confirmation panel is visible
#    When I click on Delete
#    Then I can see room page 'Course with subject and tasks'
#    And I can not see task 'Create and delete task from room'
