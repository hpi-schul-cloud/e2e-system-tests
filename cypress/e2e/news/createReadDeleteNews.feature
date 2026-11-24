@stable_test
@regression_test
@group-C
@prio_0_staging

Feature:  News - To read a news on the respective dashboards

    As a teacher, I want to read the news shown on the dashboard so that I'm informed about the latest news

    Scenario Outline: Teacher creates news, reads them and deletes them

        # pre-condition: create teacher and student
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'

        # teacher creates school news
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to news overview
        When I click on add news button
        Then I see news creation page
        When I enter news title '<news_title>'
        When I enter news description '<news_description>'
        Then I see date input field
        Then I see time input field
        When I click on save button
        Then I see news is created successfully with title '<news_title>' and with description '<news_description>'

        # teacher reads a school news on news overview page
        When I go to news overview
        Then I can read the news '<news_title>' with description '<news_description>'

        # student reads a school news on news overview page
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to news overview
        Then I can read the news '<news_title>' with description '<news_description>'

        # teacher deletes the school news
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I arrive on the dashboard
        When I click on the news teaser '<news_title>'
        When I click on delete button
        When I confirm the deletion on confirmation dialog box
        Then I do not see the news '<news_title>'

        @staging_test
        Examples:
            | teacher      | student      | namespace | news_title                         | news_description        |
            | teacher1_brb | student1_brb | brb       | CypressAut - this is a school news | school news description |
