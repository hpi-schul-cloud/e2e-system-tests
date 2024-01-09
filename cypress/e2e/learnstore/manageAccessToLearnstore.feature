@release
Feature: Learnstore - Activating and deactivating access for students

    As an admin I want to activate and deactivate students access to learnstore

    @stable_test
    Scenario Outline: Admin activates and deactivates students access to Learnstore
    # Admin deactivates students access to Learnstore - pre-condition to set the needed configuration
        Given I am logged in as a '<admin>' at '<namespace>'
        When I go to administration page
        When I go to school administration
        When I click the checkbox to disable students access to learnstore
        When I click on admin setting save button
        Then I see checkbox Disable students is unchecked
    # Student doesn't see link to Learnstore in menu
        Given I am logged in as a '<student>' at '<namespace>'
        Then I do not see Learning Store in side bar
    # Admin activates students access to Learnstore
        Given I am logged in as a '<admin>' at '<namespace>'
        When I go to administration page
        When I go to school administration
        When I click the checkbox to enable students access to learnstore
        When I click on admin setting save button
    # Student sees link to Learnstore in menu
        Given I am logged in as a '<student>' at '<namespace>'
        Then I see Learning Store in side bar
        When I go to LearnStore overview
    # Admin deactivates students access to Learnstore again (tests change from access to no-access)
        Given I am logged in as a '<admin>' at '<namespace>'
        When I go to administration page
        When I go to school administration
        When I click the checkbox to disable students access to learnstore
        When I click on admin setting save button
    # Student doesn't see link to Learnstore in menu
        Given I am logged in as a '<student>' at '<namespace>'
        Then I do not see Learning Store in side bar


        Examples:
            | admin      | namespace | student    |
            | admin1_brb | brb       | student1_brb |