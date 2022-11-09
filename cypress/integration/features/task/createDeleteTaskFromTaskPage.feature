Feature: Task - To create and delete tasks starting from task overview page by the teacher.

  As a teacher I want to create and delete a new task on the task overview page so that the student can submit it

 Scenario: As a user, I want to be able to create a simple task without course
   Given I am logged in as a 'teacher1' at 'brb'
   When I go to tasks overview
   When I click on button Add Task
#    Then I am on new task page
#    When I enter title 'Cy Task Creating from Task Overview Test'
#    When I enter task description 'This is a task for the students.'
#    When I click on button Submit
#    Then I can see create task page 'Cy Task Creating from Task Overview Test'
#    When I click on button Submit
#    When I go to tasks page
#    When I click on draft tab
#    Then I can see task 'Cy Task Creating from Task Overview Test'

#  Scenario: As a user, I want to be able to delete a simple task without course
#    Given I am logged in as 'teacher1' at 'brb'
#    When I go to tasks page
#    When I click on draft tab
#    When I click on three dot menu of content 'Cy Task Creating from Task Overview Test'
#    When I click on Delete in dot menu
#    When I click on Delete in confirmation window
#   # new opening of the room page is necessary to clear DOM from deleted tasks (reload would also work but would need a cy.wait)
#    When I arrive on the dashboard
#    When I go to tasks page
#    When I click on draft tab
#    Then I can not see task 'Cy Task Creating from Task Overview Test'