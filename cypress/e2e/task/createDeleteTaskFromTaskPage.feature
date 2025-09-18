
@regression_test
@stable_test
@schedule_run
@group-B
@pr
@prio_0_staging
Feature: Task - To create and delete tasks starting from task overview page by the teacher.

    As a teacher I want to create and delete a new task on the task overview page so that the student can submit it

    Scenario Outline: Teacher creates, edits and deletes a task from the task overview, including pre-conditions

        # pre-condition: teacher logs in to create their account in the school
        Given I am logged in as a '<teacher>' at '<namespace>'

        # teacher creates simple tasks without course
        When I go to tasks overview
        When I click on button Add Task
        Then I can see create task page
        When I enter title 'CypressAut Task Creating from Task Overview Test'
        When I enter task description 'This is a task for the students.'
        When I click on button Submit
        Then I see detail page for task 'CypressAut Task Creating from Task Overview Test'
        When I go to tasks overview
        When I click on draft tasks tab
        Then I can see task 'CypressAut Task Creating from Task Overview Test' on tasks overview page
        When I click on button Add Task
        Then I can see create task page
        When I enter title 'CypressAut Task to be delete on task page'
        When I enter task description 'This is a task to be deleted on task page.'
        When I click on button Submit
        Then I see detail page for task 'CypressAut Task to be delete on task page'
        When I go to tasks overview
        When I click on draft tasks tab
        Then I can see task 'CypressAut Task to be delete on task page' on tasks overview page

        # teacher deletes a simple task without course using the dot menu
        When I go to tasks overview
        When I click on draft tasks tab
        When I click on three dot menu of task 'CypressAut Task Creating from Task Overview Test'
        When I click on Delete Task in dot menu
        When I click on Cancel in confirmation window
        When I click on three dot menu of task 'CypressAut Task Creating from Task Overview Test'
        When I click on Delete Task in dot menu
        When I click on Delete in confirmation window
        # Note: new opening of the course page is necessary to clear DOM from deleted tasks (reload would also work but would need a cy.wait)
        When I arrive on the dashboard
        When I go to tasks overview
        When I click on draft tasks tab
        Then I can not see task 'CypressAut Task Creating from Task Overview Test' on tasks overview page

        # teacher deletes a simple task without course using the delete button on the task edit page
        When I go to tasks overview
        When I click on draft tasks tab
        When I click on task 'CypressAut Task to be delete on task page' in tasks overview
        When I click on button Delete
        When I click on button Cancel in confirmation window in edit task page
        When I click on button Delete
        When I click on button Delete in confirmation window in edit task page
        # Note: new opening of the course page is necessary to clear DOM from deleted tasks (reload would also work but would need a cy.wait)
        When I arrive on the dashboard
        When I go to tasks overview
        When I click on draft tasks tab
        Then I can not see task 'CypressAut Task to be delete on task page' on tasks overview page

        @school_api_test
        Examples:
            | namespace | teacher      | fullname_teacher  |
            | brb       | teacher1_brb | cypress teacher_1 |

        @staging_test
        Examples:
            | namespace | teacher      | fullname_teacher |
            | brb       | teacher1_brb | Karl Herzog      |
