# Note: School api migration is blocked due to admin user can not access new school setting page (BC-7390).
@release
Feature: Learning store - Activating and deactivating access for students

    As an admin I want to activate and deactivate students access to learning store

    @stable_test
    Scenario Outline: Admin activates and deactivates students access to Learning store
        # Admin activates students access to Learning store
        Given I am logged in as a '<admin>' at '<namespace>'
        When I go to administration page
        When I go to school administration
        #remove the following line if old admin page is hidden
        When I go to new school administration page
        When I click on general settings panel
        When I click the toggle switch to enable students access to learning store
        When I click on button Save admin settings
        # Student sees link to Learning store in menu
        Given I am logged in as a '<student>' at '<namespace>'
        Then I see Learning Store in side bar
        When I go to Learning Store overview
        # Admin deactivates students access to Learning store - pre-condition to set the needed configuration
        Given I am logged in as a '<admin>' at '<namespace>'
        When I go to administration page
        When I go to school administration
        #remove the following line if old admin page is hidden
        When I go to new school administration page
        When I click on general settings panel
        When I click the toggle switch to disable students access to learning store
        When I click on button Save admin settings
        Then I see toggle switch to enable students access to learning store is unchecked
        # Student doesn't see link to Learning store in menu
        Given I am logged in as a '<student>' at '<namespace>'
        Then I do not see Learning Store in side bar


        Examples:
            | admin      | namespace | student      |
            | admin1_brb | brb       | student1_brb |