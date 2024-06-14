@api_migrated
@release
@school_api_test
@staging_test
Feature:  News - To read a news on the respective dashboards

  As a teacher I want to read the news shown on the dashboard so that I'm informed about the latest news

  @stable_test
  Scenario: as a pre-condition teacher creates school news
    Given I am logged in as a 'teacher1_brb' at 'brb'
    When I go to news overview
    And I click on add news button
    Then I see news creation page
    And I enter news title 'CypressAut - this is a school news'
    And I enter news description 'school news description'
    And I see date input field
    And I see time input field
    And I click on save button
    Then I see news is created successfully with title 'CypressAut - this is a school news' and with description 'school news description'

  @stable_test
  Scenario: as a pre-condition teacher creates a team
    When I go to teams overview
    When I click on button Add Team on the teams overview page
    Then I see new team creation page
    When I enter in the title 'CypressAut - News Team'
    When I click on button Create Team on the team creation page

  @stable_test
  Scenario: as a pre-condition teacher creates a team news
    When I go to teams overview
    When I go to a team 'CypressAut - News Team'
    When I click on news tab on the team detail page
    And I click on create news button
    Then I see news creation page
    And I enter news title 'CypressAut - this is a team news'
    And I enter news description 'test team news description'
    And I see date input field
    And I see time input field
    And I click on save button
    Then I see news is created successfully with title 'CypressAut - this is a team news' and with description 'test team news description'

  @stable_test
  Scenario: Reading a school news on news overview page
    When I go to news overview
    Then I can read the news 'CypressAut - this is a school news' with description 'school news description'

  @stable_test
  Scenario: Reading a team news on teams news overview page
    When I go to teams overview
    When I go to a team 'CypressAut - News Team'
    When I click on news tab on the team detail page
    Then I can read the news 'CypressAut - this is a team news' with description 'test team news description'

  @stable_test
  Scenario: as a post-condition teacher deletes the school news
    When I arrive on the dashboard
    And I click on the news teaser 'CypressAut - this is a school news'
    When I click on delete button
    And I confirm the deletion on confirmation dialog box
    Then I do not see the news 'CypressAut - this is a school news'

  @stable_test
  Scenario: as a post-condition teacher deletes the team news
    When I arrive on the dashboard
    And I click on the news teaser 'CypressAut - this is a team news'
    When I click on delete button
    And I confirm the deletion on confirmation dialog box
    Then I do not see the news 'CypressAut - this is a team news'