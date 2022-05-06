Feature: To add a new course by the teacher

    As a teacher I want to create a new course so that I can teach and provide online course related work to the students

Scenario: Adding a new course
        Given I am logged in as a teacher
        When I visit the rooms overview
        And I click on FAB to create the course
        And I fill out the course creation form
        And I click on next steps
        Then I see the created course on the room overview page