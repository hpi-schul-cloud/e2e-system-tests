Feature: To check contents on the dashboard

    As a teacher I want to be welcomed on the dashboard so that I can start working

Scenario: Check user greeting on the dashboard
        Given I am logged in as a 'student' at 'brb'
        When I arrive on the dashboard
        Then I can see the welcome message

Scenario: Check tasks on the dashboard
        Given I am logged in as a 'teacher' at 'brb'
        When I arrive on the dashboard
        Then I can see the assigned tasks
        Then I can see the draft tasks