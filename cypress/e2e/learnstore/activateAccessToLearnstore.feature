@release
Feature: Learnstore - Activating and deactivating access for students

    As an admin I want to activate and deactivate students access to learnstore

    @stable_test
    Scenario Outline: Admin deactivates students access to Learnstore
    # Admin activates students access to Learnstore
        Given I am logged in as a '<admin>' at '<namespace>'
        When I go to administration page
        #Then I see administration general page  ->data-testid in the title depends from language. this has to be clarified if this is necessary before we can include this step.
        When I go to school administration
        When I click the checkbox to disable students access to learnstore
        When I click on admin setting save button
        Then I see checkbox Disable students is unchecked
        When I log out
        Given I am logged in as a '<student>' at '<namespace>'
        Then I do not see Learning Store in side bar
        When I log out
        Given I am logged in as a '<admin>' at '<namespace>'
        When I go to administration page
        When I go to school administration
        When I click the checkbox to enable students access to learnstore
        When I click on admin setting save button
        When I log out
        Given I am logged in as a '<student>' at '<namespace>'
        #Then I do not see Learning Store in side bar
        #When I log out


        Examples:
            | admin      | namespace | student    |
            | admin1_brb | brb       | student1_brb |

# Given I am logged in as a '<user>' at '<state>'
#     When I go to administration page
#     Then I see administration general page
#     When I go to school administration
#     Then I see school administration page
#     When I unmark checkbox Learning Store for students
#     #Then I see checkbox LerningStore for students
#     #Then I unmark the "Deny access to LerningStore" checkbox
#     When I click button Save general settings
#     Then I see checkbox Learning Store for students is not marked
#     Then I log out
#     Given I am logged in as a '<user_1>' at '<state>'
#     Then I do not see Learning Store in side bar
#     Then I log out
#     Given I am logged in as a '<user>' at '<state>'
#     When I go to administration page
#     Then I see administration general page
#     When I go to school administration
#     Then I see school administration page
#     When I mark checkbox Learning Store for students
#     #Then I see checkbox LerningStore for students
#     #Then I mark the "Deny access to LerningStore" checkbox
#     When I click button Save general settings
#     Then I see checkbox Learning Store for students is marked
#     Then I log out
#     Given I am logged in as a '<user_1>' at '<state>'
#     When I see Learning Store in side bar
#     Then I go to LearnStore overview