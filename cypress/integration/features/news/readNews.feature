Feature: To read a news on the respective dashboards

    As a teacher I want to read the news shown on the dashboard so that I'm informed about the latest news

<<<<<<< HEAD:cypress/integration/features/readNews.feature
#Scenario: Reading a school news on the dashboard
        #Given I am logged in as a 'teacher' at 'brb'
        #When I go to school news on the dashboard
        #Then I can read the school news

#Scenario: Reading a team news on the dashboard
        #Given I am logged in as a 'student' at 'brb'
        #When I go to team news on the dashboard
        #Then I can read the team news
=======
Scenario: Reading a school news on the dashboard
        Given I am logged in as a 'teacher' at 'brb'
        When I go to news overview page
        Then I can read the school news

Scenario: Reading a team news on the dashboard
        Given I am logged in as a 'teacher' at 'brb'
        When I go to team overview page
        Then I can read the team news
>>>>>>> main:cypress/integration/features/news/readNews.feature
