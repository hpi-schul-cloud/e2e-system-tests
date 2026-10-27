@regression_test
@mikroorm_v7
@group-F
Feature: Course - Persist CTL names and empty optional context parameters

    Scenario Outline: Context parameter clearing and display name updates survive reload and role changes
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'
        Given the school has external tool '<tool>'
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        When I enter the course title '<course_name>'
        When I select '<teacher_name>' from field teacher
        When I click on button Next Steps after entering the course detail in section one
        When I select '<student_name>' from field student
        When I click on button Next Steps after selecting course participant details
        When I click on button To Course Overview on the finish page

        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on the tools tab
        When I click on the button to add a tool
        When I select the tool '<tool>' from available tools
        When I enter 'alpha,{"enabled":false,"items":[1,2]}' in optional custom parameter field 'contextParam'
        When I save the external tool and wait for persistence
        Then I see the tool '<tool>' in the tool overview
        When I reload the current page
        When I click on the tools tab
        When I click on three dot menu of the tool '<tool>'
        When I click on the tool edit button
        Then I see custom parameter input field 'contextParam' contains 'alpha,{"enabled":false,"items":[1,2]}'
        When I enter '<updated_name>' in display name field
        When I clear optional custom parameter field 'contextParam'
        When I save the external tool and wait for persistence
        Then I see the tool '<updated_name>' in the tool overview
        When I reload the current page
        When I click on the tools tab
        Then I see the tool '<updated_name>' in the tool overview
        Then I do not see tool '<tool>' in the tool overview
        When I click on three dot menu of the tool '<updated_name>'
        When I click on the tool edit button
        Then I see custom parameter input field 'contextParam' contains ''
        When I click the cancel button on the tool configuration page

        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on the tools tab
        Then I see the tool '<updated_name>' in the tool overview
        Then I do not see tool '<tool>' in the tool overview
        Then I do not see the button to add a tool
        When I reload the current page
        When I click on the tools tab
        Then I see the tool '<updated_name>' in the tool overview

        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on the tools tab
        When I click on three dot menu of the tool '<updated_name>'
        When I click on the tool edit button
        Then I see custom parameter input field 'contextParam' contains ''
        When I click the cancel button on the tool configuration page
        When I click on three dot menu of the tool '<updated_name>'
        When I click on the tool delete button
        # the overview is not refreshed after deletion, so wait for the request before reloading
        When I confirm the delete tool dialog and wait for deletion
        When I reload the current page
        When I click on the tools tab
        Then I do not see tool '<updated_name>' in the tool overview
        Given course with name '<course_name>' is deleted

        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        When I click on delete button of tool '<tool>'
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<tool>' in external tools table

        @school_api_test
        Examples:
            | admin      | teacher      | student      | namespace | teacher_name      | student_name      | course_name                       | tool                             | updated_name               |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | cypress teacher_1 | cypress student_1 | CypressAut CTL Persistence Course | CY Test Tool Optional Parameters | CypressAut Persisted Tool |
