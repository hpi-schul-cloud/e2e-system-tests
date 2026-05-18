@stable_test
@regression_test
@group-A
@prio_0_staging

#---NEW TEAM CAN NOT BE CREATED IN GUI, SO PLEASE USE THE EXISTING TEAM AND DO NOT DELETE IT---#

Feature:  News - To read a news on the respective dashboards

    As a teacher, I want to read the news shown on the dashboard so that I'm informed about the latest news

    Scenario Outline: User creates news with time options, reads them and deletes them

        # pre-condition: create users for author and reader
        Given I am logged in as a '<news_reader>' at '<namespace>'
        Given I am logged in as a '<news_author>' at '<namespace>'

        # first user creates a team news
        When I go to teams overview
        When I go to a team '<team_name>'
        When I click on news tab on the team detail page
        When I click on create news button
        Then I see news creation page
        When I enter news title '<team_news_title>'
        When I enter news description '<team_news_description>'
        When I set news-visibility-start-date to '<news_day_from_today>' days at '<news_time>'
        Then I see time input field
        When I click on save button
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

        # post-condition: first user deletes the team news
        When I arrive on the dashboard
        When I click on the news teaser '<team_news_title>'
        When I click on delete button
        When I confirm the deletion on confirmation dialog box
        Then I do not see the news '<team_news_title>'

        @staging_test
        Examples:
            | news_author  | news_reader  | namespace | news_day_from_today | news_time   | news_time_info_overviewpage | news_time_info_detailpage | team_name              | team_news_title                  | team_news_description      |
            | teacher1_brb | student1_brb | brb       | 0                   | currentTime | vor ein                     | vor ein                   | QA_01 - do not delete! | CypressAut - this is a team news | test team news description |
#| admin1_brb   | student1_brb | brb       | notselected         | none        | vor ein                     | vor ein                   | CypressAut - News Team | CypressAut - this is a team news | test team news description |
#| admin1_brb   | teacher1_brb | brb       | -7                  | currentTime | vor 7 Tage                  | -7                        | CypressAut - News Team | CypressAut - this is a team news | test team news description |
