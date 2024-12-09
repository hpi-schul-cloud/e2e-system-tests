@stable_test
@regression_test
Feature:  News - To read a news on the respective dashboards

    As a teacher I want to read the news shown on the dashboard so that I'm informed about the latest news

    Scenario: User creates news with time options, reads them and deletes them
        # as a pre-condition create users for author and reader
        Given I am logged in as a '<news_reader>' at '<namespace>'
        Given I am logged in as a '<news_author>' at '<namespace>'

        # first user creates a team
        When I go to teams overview
        When I click on button Add Team on the teams overview page
        Then I see new team creation page
        When I enter in the title '<team_name>'
        When I click on button Create Team on the team creation page

        # first user creates a team news
        When I go to teams overview
        When I go to a team '<team_name>'
        When I click on news tab on the team detail page
        And I click on create news button
        Then I see news creation page
        And I enter news title '<team_news_title>'
        And I enter news description '<team_news_description>'
        When I set news-visibility-start-date to '<news_day_from_today>' days at '<news_time>'
        And I see time input field
        And I click on save button
        Then I see news is created successfully with title '<team_news_title>' and with description '<team_news_description>'

        # first user reads a team news on teams news overview page
        When I go to teams overview
        When I go to a team '<team_name>'
        When I click on news tab on the team detail page
        Then I can read the news '<team_news_title>' with description '<team_news_description>'
        Then I can see the publishing time info '<news_time_info_overviewpage>' on overview page
        When I click on the news teaser '<team_news_title>'
        Then I can read the news '<team_news_title>' with description '<team_news_description>' on news detail page
        Then I can see the publishing time info '<news_time_info_detailpage>' on news detail page

        # first user deletes the team news
        When I arrive on the dashboard
        And I click on the news teaser '<team_news_title>'
        When I click on delete button
        And I confirm the deletion on confirmation dialog box
        Then I do not see the news '<team_news_title>'

        # first user deletes the team
        When I go to teams overview
        When I go to a team '<team_name>'
        When I click on team settings
        When I click on delete option
        Then I see dialog box and click on delete button to confirm the deletion
        Then I do not see the team '<team_name>'

        @school_api_test
        @staging_test
        Examples:
            | news_author  | news_reader  | namespace | news_day_from_today | news_time   | news_time_info_overviewpage | news_time_info_detailpage | team_name              | team_news_title                  | team_news_description      |
            | teacher1_brb | student1_brb | nbc       | 0                   | currentTime | vor ein                     | vor ein                   | CypressAut - News Team | CypressAut - this is a team news | test team news description |
            #| admin1_brb   | student1_brb | nbc       | notselected         | none        | vor ein                     | vor ein                   | CypressAut - News Team | CypressAut - this is a team news | test team news description |
            #| admin1_brb   | teacher1_brb | nbc       | -7                  | currentTime | vor 7 Tage                  | -7                        | CypressAut - News Team | CypressAut - this is a team news | test team news description |