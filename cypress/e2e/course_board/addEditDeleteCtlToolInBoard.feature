@regression_test
@stable_test
Feature: Course Board  - To add, edit and delete a ctl tool in a board

    As a teacher I want to add, edit and delete a ctl tool in my course board

    @stable_test
    Scenario Outline: Teacher adds, edits and deletes tools in a course board
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # Pre-condition: Admin creates a course
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title 'Cypress Test Course'
        When I select 'Karl Herzog' from field teacher
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page

        # Pre-condition: Admin adds external tools to school
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        When I click the add external tool button
        When I select the tool 'CY Test Tool 1' from available tools
        When I click on save external tool button
        Then I see the tool 'CY Test Tool 1' in external tools table
        When I click the add external tool button
        When I select the tool 'CY Test Tool Required Parameters' from available tools
        When I enter 'test' in required custom parameter input field 'schoolParam'
        When I click on save external tool button
        Then I see the tool 'CY Test Tool Required Parameters' in external tools table
        When I click the add external tool button
        When I select the tool 'CY Test Tool Optional Parameters' from available tools
        When I click on save external tool button
        Then I see the tool 'CY Test Tool Optional Parameters' in external tools table
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        When I click the add external tool button
        When I insert the external tool link 'https://www.openstreetmap.org/?mlat=52.40847&mlon=9.80823&zoom=19#map=19/52.40847/9.80823'
        When I click on save external tool button
        Then I see the tool 'CY Test Tool OpenStreetMap' in external tools table

        # Teacher adds a tool without a custom parameter
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course 'Cypress Test Course'
        When I go to the tab contents in course detail page
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see a dialog box for column board
        Then I see in dialog box option for multi-column board
        Then I see in dialog box option for single column board
        When I choose multi-column board in the dialog box
        Then I see the page Course Board details
        Then I see the chip Draft in the course board
        When I click on the button Add column in the course board
        When I click on the page outside of the column
        When I click on plus icon to add card in column
        When I click on plus icon to add content into card
        When I select external tools from the menu
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool 1' from available tools
        Then I see tool 'CY Test Tool 1' is selected
        When I click on save external tool button
        Then I see an external tool element with tool 'CY Test Tool 1'
        # Teacher launches tool
        When I launch tool 'CY Test Tool 1' on external tool element with given url 'https://google.com/'
        Then I see tool 'CY Test Tool 1' on external tool element was launched

        # Teacher adds a tool twice but with a different name
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on plus icon to add content into card
        When I select external tools from the menu
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool 1' from available tools
        Then I see tool 'CY Test Tool 1' is selected
        When I enter 'CY Test Tool 1 New' in display name field
        When I click on save external tool button
        Then I see an external tool element with tool 'CY Test Tool 1 New'

        # Teacher adds tool via tool link
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on plus icon to add content into card
        When I select external tools from the menu
        When I click on the tool configuration selection
        When I insert the external tool link 'https://www.openstreetmap.org/?mlat=52.40847&mlon=9.80823&zoom=19#map=19/52.40847/9.80823'
        Then I see tool 'CY Test Tool OpenStreetMap' is selected
        Then I see configuration 'mlat' is filled below with '52.40847'
        Then I see configuration 'mlon' is filled below with '9.80823'
        Then I see configuration 'zoom' is filled below with '19'
        When I click on save external tool button
        Then I see an external tool element with tool 'CY Test Tool OpenStreetMap'

        # Teacher adds tool with a required custom parameter
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on plus icon to add content into card
        When I select external tools from the menu
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool Required Parameters' from available tools
        Then I see tool 'CY Test Tool Required Parameters' is selected
        # When required field is empty
        When I click on save external tool button
        Then I see an error alert
        When I enter 'test' in required custom parameter field 'contextParam'
        Then I see custom parameter input field 'contextParam' contains 'test'
        When I click on save external tool button
        Then I see an external tool element with tool 'CY Test Tool Required Parameters'

        # Teacher adds a tool with an optional custom parameter
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on plus icon to add content into card
        When I select external tools from the menu
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool Optional Parameters' from available tools
        Then I see tool 'CY Test Tool Optional Parameters' is selected
        When I enter 'test' in optional custom parameter field 'contextParam'
        Then I see custom parameter input field 'contextParam' contains 'test'
        When I click on save external tool button
        Then I see an external tool element with tool 'CY Test Tool Optional Parameters'

        # Teacher edits a tool
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on three dot menu of external tool element 'CY Test Tool Optional Parameters'
        When I click the edit button in three dot menu on the element
        Then I see tool 'CY Test Tool Optional Parameters' is selected
        Then I see custom parameter input field 'contextParam' contains 'test'
        When I enter 'updated test' in optional custom parameter field 'contextParam'
        Then I see custom parameter input field 'contextParam' contains 'updated test'
        When I click on save external tool button
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on three dot menu of external tool element 'CY Test Tool Optional Parameters'
        When I click the edit button in three dot menu on the element
        Then I see custom parameter input field 'contextParam' contains 'updated test'
        When I click on save external tool button

        # Teacher deletes tools from board
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on three dot menu of external tool element 'CY Test Tool Optional Parameters'
        When I click the delete button in three dot menu on the element
        When I click on the button Remove on the Modal

        # Post-condition: Admin deletes course
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I go to course administration page
        When I click the delete button for course 'Cypress Test Course' in course table
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        Then I do not see course 'Cypress Test Course' in course table

        # Post-condition: Admin deletes tools
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table
        When I click on delete button of tool 'CY Test Tool 1'
        When I confirm deletion on deletion dialog
        Then I do not see the tool 'CY Test Tool 1' in external tools table
        When I click on delete button of tool 'CY Test Tool Required Parameters'
        When I confirm deletion on deletion dialog
        Then I do not see the tool 'CY Test Tool Required Parameters' in external tools table
        When I click on delete button of tool 'CY Test Tool Optional Parameters'
        When I confirm deletion on deletion dialog
        Then I do not see the tool 'CY Test Tool Optional Parameters' in external tools table
        When I click on delete button of tool 'CY Test Tool OpenStreetMap'
        When I confirm deletion on deletion dialog
        Then I do not see the tool 'CY Test Tool OpenStreetMap' in external tools table
        Then I see the external tools table is empty

        @staging_test
        Examples:
            | admin      | teacher      | namespace | fullname_teacher |
            | admin1_nbc | teacher1_nbc | nbc       | Karl Herzog      |

        # @school_api_test
        # This feature is not executable with the school_api
