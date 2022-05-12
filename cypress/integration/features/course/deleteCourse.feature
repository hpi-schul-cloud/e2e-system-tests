Feature: To delete the course created for testing purpose

    As a teacher I want to delete the newly created test course so that list of course can be cleaned and not full with test courses

    Scenario: Deleting the course/room which is created after executing the create course feature
        Given I am logged in as a 'teacher' to 'brb'
        When I am in the rooms overview
        And select the room to be deleted
        Then I should be able to delete the test room