Feature: Set of tests to create course

    Background: User opens Schul-cloud homepage website
        Given user arrives on the Schul-Cloud homepage

    Scenario Outline: Adding a new course
        Given I am logged in as a teacher
        When '<userRole>' visit the rooms overview
        Then '<userRole>' able to create a course in the old course creation page
        Then '<userRole>' should be able to delete the course
        Examples: 
        |userRole|
        |teacher|
