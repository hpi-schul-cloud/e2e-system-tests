@stable_test
@regression_test
@schedule_run
@group-A
Feature:  News - To read a news on the respective dashboards

    As a teacher I want to read the news shown on the dashboard so that I'm informed about the latest news

    Scenario: User creates news with time options, reads them and deletes them
        # as a pre-condition create users for author and reader
        Given I am logged in as a '<news_reader>' at '<namespace>'
        Given I am logged in as a '<news_author>' at '<namespace>'

        # first user creates school news with different time options
        When I go to news overview
        When I click on add news button
        Then I see news creation page
        When I enter news title '<news_title>'
        When I enter news description '<news_description>'
        When I set news-visibility-start-date to '<news_day_from_today>' days at '<news_time>'
        Then I see time input field
        When I click on save button
        Then I see news is created successfully with title '<news_title>' and with description '<news_description>'

        # first user reads a school news on news overview page, then teacher opens news and reads news detail page
        When I go to news overview
        Then I can read the news '<news_title>' with description '<news_description>'
        Then I can see the publishing time info '<news_time_info_overviewpage>' on overview page
        When I click on the news teaser '<news_title>'
        Then I can read the news '<news_title>' with description '<news_description>' on news detail page
        Then I can see the publishing time info '<news_time_info_detailpage>' on news detail page

        # second user reads a school news on news overview page, then second user opens news and reads news detail page
        Given I am logged in as a '<news_reader>' at '<namespace>'
        When I go to news overview
        Then I can read the news '<news_title>' with description '<news_description>'
        Then I can see the publishing time info '<news_time_info_overviewpage>' on overview page
        When I click on the news teaser '<news_title>'
        Then I can read the news '<news_title>' with description '<news_description>' on news detail page
        Then I can see the publishing time info '<news_time_info_detailpage>' on news detail page

        # first user deletes the school news
        Given I am logged in as a '<news_author>' at '<namespace>'
        When I arrive on the dashboard
        When I click on the news teaser '<news_title>'
        When I click on delete button
        When I confirm the deletion on confirmation dialog box
        Then I do not see the news '<news_title>'

        @school_api_test
        @staging_test
        Examples:
            | news_author  | news_reader  | namespace | news_title                               | news_description                 | news_day_from_today | news_time   | news_time_info_overviewpage | news_time_info_detailpage |
            | teacher1_brb | student1_brb | brb       | CypressAut - school news at current time | Remember Examination date        | 0                   | currentTime | vor ein                     | vor ein                   |
            | admin1_brb   | student1_brb | brb       | CypressAut - school news without time    | New member of the teaching staff | notselected         | none        | vor ein                     | vor ein                   |
            | admin1_brb   | teacher1_brb | brb       | CypressAut - school news 7 days ago      | New member of the teaching staff | -7                  | currentTime | vor 7 Tage                  | -7                        |
