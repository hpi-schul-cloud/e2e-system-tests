Feature: To read a news on the dashboard

  As a teacher I want to read the news shown on the dashboard so that I'm informed about the latest news

  Scenario: Reading a school news on the dashboard
    Given I am logged in as a 'teacher' at 'brb'
    When I go to school news on the dashboard
    Then I can read the school news

  Scenario: Reading a team news on the dashboard
    Given I am logged in as a 'student' at 'brb'
    When I go to team news on the dashboard
    Then I can read the team news