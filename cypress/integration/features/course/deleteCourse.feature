Feature: To delete the course crteated for testing purpose

    As a teacher I want to delete the newly created test course so that list of course can be cleaned and not full with test courses

Scenario: Deleting the test course created during executing the testing
        Given I am logged in as a teacher
        When I am in the rooms overview
        Then I should be able to delete the test room 