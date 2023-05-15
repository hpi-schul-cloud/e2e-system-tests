@pr
@release
Feature: Task - To create and delete tasks starting from task overview page by the teacher.

  As a teacher I want to create and delete a new task on the task overview page so that the student can submit it

  @stable_test
  Scenario: Teacher creates simple tasks without course
    Given I am logged in as a 'teacher1' at 'brb'
    When I go to tasks overview
    When I click on button Add Create Content
    When I click on button Add Task
    Then I can see create task page '-'
    When I enter title 'Cy Task Creating from Task Overview Test'
    When I enter task description 'This is a task for the students.'
    When I click on button Submit
    Then I see detail page for task 'Cy Task Creating from Task Overview Test'
    When I go to tasks overview
    When I click on draft tasks tab
    Then I can see task 'Cy Task Creating from Task Overview Test' on tasks overview page
    When I click on button Add Create Content
    When I click on button Add Task
    Then I can see create task page '-'
    When I enter title 'Cy Task to be delete on task page'
    When I enter task description 'This is a task to be deleted on task page.'
    When I click on button Submit
    Then I see detail page for task 'Cy Task to be delete on task page'
    When I go to tasks overview
    When I click on draft tasks tab
    Then I can see task 'Cy Task to be delete on task page' on tasks overview page

  @stable_test
  Scenario: Teacher deletes a simple task without course using the dot menu
    Given I am logged in as a 'teacher1' at 'brb'
    When I go to tasks overview
    When I click on draft tasks tab
    When I click on three dot menu of task 'Cy Task Creating from Task Overview Test'
    When I click on Delete Task in dot menu
    When I click on Cancel in confirmation window
    When I click on three dot menu of task 'Cy Task Creating from Task Overview Test'
    When I click on Delete Task in dot menu
    When I click on Delete in confirmation window
    # new opening of the room page is necessary to clear DOM from deleted tasks (reload would also work but would need a cy.wait)
    When I arrive on the dashboard
    When I go to tasks overview
    When I click on draft tasks tab
    Then I can not see task 'Cy Task Creating from Task Overview Test' on tasks overview page

  @stable_test
  Scenario: Teacher deletes a simple task without course using the delete button on the task edit page
    Given I am logged in as a 'teacher1' at 'brb'
    When I go to tasks overview
    When I click on draft tasks tab
    When I click on task 'Cy Task to be delete on task page' in tasks overview
    When I click on button Delete
    When I click on button Cancel in confirmation window in edit task page
    When I click on button Delete
    When I click on button Delete in confirmation window in edit task page
    #   # new opening of the room page is necessary to clear DOM from deleted tasks (reload would also work but would need a cy.wait)
    When I arrive on the dashboard
    When I go to tasks overview
    When I click on draft tasks tab
    Then I can not see task 'Cy Task to be delete on task page' on tasks overview page