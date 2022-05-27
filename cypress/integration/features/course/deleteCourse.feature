Feature: To delete the course created for testing purpose

    As a teacher I want to delete the newly created test course/room so that list of courses/rooms can be cleaned and not full with test courses/rooms

    Scenario: Deleting the test course/room created during executing the testing
        Given I am logged in as a 'teacher' at 'brb'
        When I go to rooms overview
        And I go to a room
        Then I should be able to delete the test room
        #imho missing the step to see that the course/rooms is not there anymore