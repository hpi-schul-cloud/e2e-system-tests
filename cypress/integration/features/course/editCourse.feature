Feature: To edit a course by the teacher

    As a teacher I want to edit a course so that I can teach and provide online course related work to the students

    Scenario: Adding a class to a course
        Given I am logged in as a 'teacher' at 'brb'
        When I go to rooms overview
        And I go to room 'Kurs Mathe'
        Then I can see room page 'Mathe'
        When I open course edit page
        Then I can see course edit page
        When I choose a class
        And I click on save changes
        Then I can see room page 'Mathe'
        When I open course edit page
        Then I can see course edit page
        And class is in field classes
        And students of the class are in field students
        # When I log out
        # And log in as student
        # And I go to rooms overview
        # Then I see the course

    Scenario: Removing classes from a course
        Given I am logged in as a 'teacher' at 'brb'
        When I go to rooms overview
        And I go to room 'Kurs Mathe'
        Then I can see room page 'Mathe'
        When I open course edit page
        Then I can see course edit page
        When I remove all classes
        And I click on save changes
        Then I can see room page 'Mathe'
        When I open course edit page
        Then I can see course edit page
        And there are no classes in the classes field
        And there are no students in the students field