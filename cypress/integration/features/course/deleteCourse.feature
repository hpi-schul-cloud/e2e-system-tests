Feature: To delete the course crteated for testing purpose

    Background: User opens Schul-cloud homepage website
        Given user arrives on the Schul-Cloud homepage

    Scenario Outline: Deleting a new course
        Given I am logged in as a teacher
        When '<userRole>' visit the rooms overview
        Then '<userRole>' should be able to delete the course
        Examples:
            | userRole |
            | teacher  |