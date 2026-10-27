@regression_test
@stable_test
@mikroorm_v7
Feature: News - Persist edited school news

    As a teacher, I want edited school news to be stored permanently so that readers always see the current content

    Scenario Outline: Teacher edits school news and the changes survive reload and role changes

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
        When I click on save button
        Then I see news is created successfully with title '<news_title>' and with description '<news_description>'

        # teacher edits the school news and verifies it after reload
        When I click on edit news button
        When I replace the news title with '<news_title_edited>'
        When I replace the news description with '<news_description_edited>'
        When I save the news and wait for the update
        When I reload the current page
        Then I can read the news '<news_title_edited>' with description '<news_description_edited>' on news detail page
        Then I do not see the news title '<news_title>' on news detail page
        When I go to news overview
        Then I can read the news '<news_title_edited>' with description '<news_description_edited>'

        # student reads the edited school news in a new session
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to news overview
        Then I can read the news '<news_title_edited>' with description '<news_description_edited>'
        When I click on the news teaser '<news_title_edited>'
        Then I can read the news '<news_title_edited>' with description '<news_description_edited>' on news detail page
        Then I do not see the news title '<news_title>' on news detail page

        # post-condition: teacher deletes the school news
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to news overview
        When I click on the news teaser '<news_title_edited>'
        When I click on delete button
        When I confirm the deletion on confirmation dialog box
        When I reload the news overview and wait for the news list
        Then I do not see the news '<news_title_edited>'

        @school_api_test
        Examples:
            | teacher      | student      | namespace | news_title                       | news_description         | news_title_edited               | news_description_edited         |
            | teacher1_brb | student1_brb | brb       | CypressAut - news to be edited   | original news content    | CypressAut - edited school news | edited news content, with comma |
