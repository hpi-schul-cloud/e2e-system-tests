 Scenario: Adding a new task
        When I visit the rooms overview
        When I visit the room board
        When I add a task
        Then I am able to create a task in the old task creation page

Scenario: Student can not create a task
        Given I am logged in as a student
        When I visit the rooms overview
        When I visit the room board
        Then I should not be able to create or import topics or tasks