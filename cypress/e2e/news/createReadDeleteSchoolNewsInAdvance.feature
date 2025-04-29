@stable_test
@regression_test
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
        Then I can read the news '<news_title>' with description '<news_description>' on news detail page
        When I go to news overview
        Then I do not see the unpublished news '<news_title>'
        When I click on tab for unpublished news
        Then I see the unpublished news '<news_title>'

        # second user reads a school news on news overview page, then second user opens news and reads news detail page
        Given I am logged in as a '<news_reader>' at '<namespace>'
        When I go to news overview
        Then I do not see the news '<news_title>'
        When I wait '<news_waiting_time>' seconds and reload
        Then I can read the news '<news_title>' with description '<news_description>'
        When I click on the news teaser '<news_title>'
        Then I can read the news '<news_title>' with description '<news_description>' on news detail page

        # first user deletes the school news
        Given I am logged in as a '<news_author>' at '<namespace>'
        When I arrive on the dashboard
        When I go to news overview
        Then I can read the news '<news_title>' with description '<news_description>'
        When I click on the news teaser '<news_title>'
        When I click on delete button
        When I confirm the deletion on confirmation dialog box
        Then I do not see the news '<news_title>'

        @school_api_test
        @staging_test
        Examples:
            | news_author  | news_reader  | namespace | news_title                          | news_description          | news_day_from_today | news_time | news_waiting_time |
            | teacher1_brb | student1_brb | brb       | CypressAut - school news in advance | Remember Examination date | 0                   | +2minutes | 120               |