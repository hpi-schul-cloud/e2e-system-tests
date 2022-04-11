Feature: Add topic and task to the room board by the teacher 

    As a teacher, I want to add tasks and topic directly on the board so that I don't have to jump back and forth between pages.


    Scenario: Adding a new topic
        Given I am logged in as a teacher
        When I visit the rooms overview
        When I visit the room board
        When I add a topic
        Then I am able to create a new topic in the old topic creation page


    Scenario: Adding a new task
        When I visit the rooms overview
        When I visit the room board
        When I add a task
        Then I am able to create a task in the old task creation page


    Scenario: Student can not create and import topics or tasks
        Given I am logged in as a student
        When I visit the rooms overview
        When I visit the room board
        Then I should not be able to create or import topics or tasks