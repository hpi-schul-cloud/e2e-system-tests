Feature: To add a new course by the teacher

    As a teacher I want to create a new course so that I can teach and provide online course related work to the students

Scenario: Adding a new course
        Given I am logged in as a teacher
        When I visit the rooms overview
        Then I am able to create a course in the old course creation page