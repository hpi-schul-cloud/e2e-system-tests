@regression_test
@stable_test
@schedule_run
@group-B
@pr
@pre_check_test
@prio_0_staging
Feature: Learning store - Activating and deactivating access for students

    As an admin, I want to activate and deactivate students access to learning store

    Scenario Outline: Admin activates and deactivates the learning store and student can access it

        # pre-condition: admin, student log in to create their account in a same school
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # admin activates students access to learning store
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable students access to learning store
        When I click on button Save admin settings

        # student sees link to learning store in menu
        Given I am logged in as a '<student>' at '<namespace>'
        Then I see Learning Store in side bar
        When I go to Learning Store overview

        # admin deactivates students access to learning store - pre-condition to set the needed configuration
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to disable students access to learning store
        When I click on button Save admin settings
        Then I see toggle switch to enable students access to learning store is unchecked

        # student doesn't see link to learning store in menu
        Given I am logged in as a '<student>' at '<namespace>'
        Then I do not see Learning Store in side bar

        @school_api_test
        @staging_test
        Examples:
            | admin      | student      | namespace |
            | admin1_brb | student1_brb | brb       |
