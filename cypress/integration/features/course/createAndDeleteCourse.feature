Feature: To add a new course by the teacher

    As a teacher I want to create a new course so that I can teach and provide online course related work to the students

    Scenario: Adding a new course or room
        Given I am logged in as a 'teacher' at 'brb'
        When I go to rooms overview
        And I click on FAB to create the course
        And I fill out the course creation form for new course
        And I click on next steps
        Then I see the course on the room overview page

    Scenario: Deleting the course or room
        Given I am logged in as a 'teacher' at 'brb'
        When I go to rooms overview
        And I go to newly created room board
        Then I should be able to delete the room
        Then I do not see the course on the room overview page