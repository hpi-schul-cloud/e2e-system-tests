@regression_test
@stable_test
@group-F
@prio_0_staging
Feature: Teams - Edit operations on Teams (only on staging environment)

    As a teacher, I want to edit the team so that I can manage it.

    Scenario Outline: Teacher edits the existing team

        # ---------- creating a new team feature is no longer possible in GUI ----------
        # Given I am logged in as a '<teacher>' at '<namespace>'
        # When I go to teams overview
        # When I click on button Add Team on the teams overview page
        # Then I see new team creation page
        # When I enter in the title '<team_title>'
        # When I enter in the description '<team_description>'
        # When I select the team colour black
        # When I click on button Create Team on the team creation page
        # When I go to teams overview
        # Then I see team title '<team_title>' is visible
        # Then I see the description '<team_description>' is visible

        # teacher edits the existing team
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to teams overview
        When I go to a team '<team_title>'
        When I click on team settings
        When I click on edit option
        Then I see team edit page
        When I enter in the title '<team_edited_title>'
        When I enter in the description '<team_edited_description>'
        When I click on teams save changes button
        When I go to teams overview
        Then I see team title '<team_edited_title>' is visible
        Then I see the description '<team_edited_description>' is visible

        # teacher re-edits the existing team to the original title and description
        When I go to a team '<team_edited_title>'
        When I click on team settings
        When I click on edit option
        Then I see team edit page
        When I enter in the title '<team_title>'
        When I enter in the description '<team_description>'
        When I click on teams save changes button
        When I go to teams overview
        Then I see team title '<team_title>' is visible
        Then I see the description '<team_description>' is visible

        # ---------- creating a new team feature is no longer possible in GUI, so please do not delete the existing teams ----------
        # When I go to teams overview
        # When I go to a team '<team_edited_title>'
        # When I click on team settings
        # When I click on delete option
        # Then I see dialog box and click on delete button to confirm the deletion
        # Then I do not see the team '<team_edited_title>'

        @staging_test
        Examples:
            | teacher      | namespace | team_title             | team_description              | team_edited_title                         | team_edited_description              |
            | teacher1_brb | brb       | QA_01 - do not delete! | This is CRUD team description | CypressAut Edited Create,Edit,Delete team | This is edited CRUD team description |
