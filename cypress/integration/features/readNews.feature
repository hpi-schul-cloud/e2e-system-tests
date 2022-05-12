Feature: To read a news on the dashboard

    As a teacher I want to read the news shown on the dashboard so that I'm informed about the latest news

Scenario: Reading a school news on the dashboard
        Given I am logged in as a 'teacher' to 'brb'
        When I go to the school news on the dashboard
        Then I can read the school news

Scenario: Reading a team news on the dashboard
        Given I am logged in as a 'student' to 'brb'
        When I go to the team news on the dashboard
        Then I can read the team news