@regression_test
@mikroorm_v7
@group-C
Feature: Admin - Persist and clear optional CTL school parameters

    Scenario Outline: School parameters retain literal values and stay empty after clearing
        Given I am logged in as a '<admin>' at '<namespace>'
        Given the school has external tool '<tool>'
        When I click on edit button of tool '<tool>'
        Then I see the school external tool configuration page
        When I enter 'alpha,{"enabled":false,"items":[1,2]}' in optional custom parameter field 'schoolParam'
        When I save the external tool and wait for persistence
        Then I see the tool '<tool>' in external tools table
        When I reload the current page
        When I click on edit button of tool '<tool>'
        Then I see custom parameter input field 'schoolParam' contains 'alpha,{"enabled":false,"items":[1,2]}'
        When I clear optional custom parameter field 'schoolParam'
        When I save the external tool and wait for persistence
        Then I see the tool '<tool>' in external tools table
        When I reload the current page
        When I click on edit button of tool '<tool>'
        Then I see custom parameter input field 'schoolParam' contains ''
        When I click the cancel button on the tool configuration page

        # Restore the same administrator session on a new document, not a new School API user.
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        When I click on edit button of tool '<tool>'
        Then I see custom parameter input field 'schoolParam' contains ''
        # Cancel and reload return without openPanels=tools, so the panel is collapsed again.
        When I click the cancel button on the tool configuration page
        When I click on external tools panel
        When I click on delete button of tool '<tool>'
        When I confirm deletion on deletion dialog and wait for deletion
        When I reload the current page
        When I click on external tools panel
        Then I do not see the tool '<tool>' in external tools table

        @school_api_test
        Examples:
            | admin      | namespace | tool                             |
            | admin1_nbc | nbc       | CY Test Tool Optional Parameters |
