@stable_test
@regression_test
@schedule_run
@group-C
@pre_check_test
@prio_0_staging
Feature: Teams - Student managed teams

    As a student I want to create/edit/delete the team so that I can manage the team. This is not possible for NBC, because there students are generally not allowed to create teams.

    Scenario Outline: student creates, edits and deletes team
        # as a pre-condition create teacher and student
        Given I am logged in as a '<admin>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'

        # pre-condition: admin allows student to create a team
        # in nbc students generally are allowed to create a team - there is no checkbox for admin to manage this - has to be adapted
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I go to team administration
        When I click the checkbox to allow students to create a team
        When I click on Save
        Then I see checkbox is saved

        # student creates team
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to teams overview
        When I click on button Add Team on the teams overview page
        Then I see new team creation page
        When I enter in the title '<team_title>'
        When I enter in the description '<team_description>'
        When I select the team colour black
        Then I click on button Create Team on the team creation page
        When I go to teams overview
        Then I see team title '<team_title>' is visible
        Then I see the description '<team_description>' is visible

        # student edits team
        When I go to a team '<team_title>'
        When I click on team settings
        When I click on edit option
        Then I see team edit page
        When I enter in the title '<team_title_edited>'
        When I enter in the description '<team_description_edited>'
        When I click on teams save changes button
        When I go to teams overview
        Then I see team title '<team_title_edited>' is visible
        Then I see the description '<team_description_edited>' is visible

        # student deletes team
        When I go to a team '<team_title_edited>'
        When I click on team settings
        When I click on delete option
        Then I see dialog box and click on delete button to confirm the deletion
        Then I do not see the team '<team_title_edited>'

        @school_api_test
        @staging_test
        Examples:
            | admin      | student      | namespace | team_title                 | team_description                    | team_title_edited             | team_description_edited                    |
            | admin1_brb | student1_brb | brb       | CypressAut - students team | this is cy student team description | CypressAut - Edited News Team | edited this is cy student team description |
