@school_api_test
@release
@stable_test
Feature:  News - To read a news on the respective dashboards

  As a teacher I want to read the news shown on the dashboard so that I'm informed about the latest news

  @stable_test
  Scenario: Teacher creates news. reads them and deletes them
  # as a pre-condition teacher creates school news
    Given I am logged in as a '<teacher>' at '<namespace>'
    When I go to news overview
    And I click on add news button
    Then I see news creation page
    And I enter news title '<news_title>'
    And I enter news description '<news_description>'
    And I see date input field
    And I see time input field
    And I click on save button
    Then I see news is created successfully with title '<news_title>' and with description '<news_description>'
  # as a pre-condition teacher creates a team
    When I go to teams overview
    When I click on button Add Team on the teams overview page
    Then I see new team creation page
    When I enter in the title '<team_name>'
    When I click on button Create Team on the team creation page
  # as a pre-condition teacher creates a team news
    When I go to teams overview
    When I go to a team '<team_name>'
    When I click on news tab on the team detail page
    And I click on create news button
    Then I see news creation page
    And I enter news title '<team_news_title>'
    And I enter news description '<team_news_description>'
    And I see date input field
    And I see time input field
    And I click on save button
    Then I see news is created successfully with title '<team_news_title>' and with description '<team_news_description>'
  # Reading a school news on news overview page
    When I go to news overview
    Then I can read the news '<news_title>' with description '<news_description>'
  # Reading a team news on teams news overview page
    When I go to teams overview
    When I go to a team '<team_name>'
    When I click on news tab on the team detail page
    Then I can read the news '<team_news_title>' with description '<team_news_description>'
  # as a post-condition teacher deletes the school news
    When I arrive on the dashboard
    And I click on the news teaser '<news_title>'
    When I click on delete button
    And I confirm the deletion on confirmation dialog box
    Then I do not see the news '<news_title>'
  # as a post-condition teacher deletes the team news
    When I arrive on the dashboard
    And I click on the news teaser '<team_news_title>'
    When I click on delete button
    And I confirm the deletion on confirmation dialog box
    Then I do not see the news '<team_news_title>'

    @school_api_test
    @staging_test
    Examples:
      | teacher      | namespace | news_title                         | news_description        | team_name              | team_news_title                  | team_news_description      |
      | teacher1_brb | brb       | CypressAut - this is a school news | school news description | CypressAut - News Team | CypressAut - this is a team news | test team news description |