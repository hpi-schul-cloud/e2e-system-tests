@unstable_test
Feature: Course - Restrict CTL tools to context course, board-element, media-board

  As a teacher I want add ctl tools with a certain context restriction

  @unstable_test
  Scenario: Admin creates a course and adds external tools to school
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to courses overview
    #    Pre-Test: Admin creates a course
    When I click on FAB to create a new course depending on sub menu
    Then I see section one area on the course create page
    When I enter the course title 'Cypress Test Course'
    When I select 'Karl Herzog' from field teacher
    When I click on button Next Steps after entering the course detail in section one
    Then I see section two area on the course create page
    When I click on button Next Steps after selecting course participant details
    Then I see the section three area as the finish page
    When I click on button To Course Overview on the finish page
    #   Admin adds tools
    When I click on administration in menu
    When I navigate to new school admin page via sub menu
    When I click on external tools panel
    When I click the add external tool button
    When I select the tool 'CY Test Tool 1' from available tools
    When I click on save external tool button
    Then I see the tool 'CY Test Tool 1' in external tools table
    Then I see the tool 'CY Test Tool 1' in external tools table has no context restriction
    When I click the add external tool button
    When I select the tool 'CY Test Tool Course Restriction' from available tools
    When I click on save external tool button
    Then I see the tool 'CY Test Tool Course Restriction' in external tools table
    Then I see the tool 'CY Test Tool Course Restriction' in external tools table has context restriction 'Kurs-Tools'
    When I click the add external tool button
    When I select the tool 'CY Test Tool Board-Element Restriction' from available tools
    When I click on save external tool button
    Then I see the tool 'CY Test Tool Board-Element Restriction' in external tools table
    Then I see the tool 'CY Test Tool Board-Element Restriction' in external tools table has context restriction 'Bereiche'
    When I click the add external tool button
    When I select the tool 'CY Test Tool Media-Board Restriction' from available tools
    When I click on save external tool button
    Then I see the tool 'CY Test Tool Media-Board Restriction' in external tools table
    Then I see the tool 'CY Test Tool Media-Board Restriction' in external tools table has context restriction 'Medienregal'
    When I click the add external tool button
    When I select the tool 'CY Test Tool All Restrictions' from available tools
    When I click on save external tool button
    Then I see the tool 'CY Test Tool All Restrictions' in external tools table
    Then I see the tool 'CY Test Tool All Restrictions' in external tools table has context restriction 'Kurs-Tools, Bereiche, Medienregal'
    When I click the add external tool button
    When I select the tool 'CY Test Tool Preferred Course Restriction' from available tools
    When I click on save external tool button
    Then I see the tool 'CY Test Tool Preferred Course Restriction' in external tools table
    Then I see the tool 'CY Test Tool Preferred Course Restriction' in external tools table has context restriction 'Kurs-Tools'
    When I click the add external tool button
    When I select the tool 'CY Test Tool Preferred Board Restriction' from available tools
    When I click on save external tool button
    Then I see the tool 'CY Test Tool Preferred Board Restriction' in external tools table
    Then I see the tool 'CY Test Tool Preferred Board Restriction' in external tools table has context restriction 'Bereiche'

  @unstable_test
  Scenario: Teacher adds ctl tools to context course, board-element and media-board
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to courses overview
    When I go to course 'Cypress Test Course'
    Then I see course page 'Cypress Test Course'
    When I click on the tools tab
    Then I see the button to add a tool
    When I click on the button to add a tool
    Then I see the tool configuration page title
    When I click on the tool configuration selection
    #    Teacher tries to a tool with context restriction board-element
    Then I do not see tool 'CY Test Tool Board-Element Restriction' in the tool selection
    #    Teacher tries to a tool with context restriction media-board
    Then I do not see tool 'CY Test Tool Media-Board Restriction' in the tool selection
    #    Teacher adds a tool with context restriction course
    When I select the tool 'CY Test Tool Course Restriction' from available tools
    Then I see tool 'CY Test Tool Course Restriction' is selected
    When I click on save external tool button
    Then I see the tool 'CY Test Tool Course Restriction' in the tool overview
    #    Teacher adds a tool with all context restrictions
    When I click on the button to add a tool
    Then I see the tool configuration page title
    When I click on the tool configuration selection
    When I select the tool 'CY Test Tool All Restrictions' from available tools
    Then I see tool 'CY Test Tool All Restrictions' is selected
    When I click on save external tool button
    Then I see the tool 'CY Test Tool All Restrictions' in the tool overview
    #    Teacher adds a tool without any context restriction
    When I click on the button to add a tool
    Then I see the tool configuration page title
    When I click on the tool configuration selection
    When I select the tool 'CY Test Tool 1' from available tools
    Then I see tool 'CY Test Tool 1' is selected
    When I click on save external tool button
    Then I see the tool 'CY Test Tool 1' in the tool overview

    #    Teacher adds ctl tools with context restriction board-element to a board
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
    #    Teacher tries to add a tool with context restriction course
    Then I do not see tool 'CY Test Tool Course Restriction' in the tool selection
    #    Teacher tries to add a tool with context restriction media-board
    Then I do not see tool 'CY Test Tool Media-Board Restriction' in the tool selection
    #    Teacher adds a tool with context restriction board-element
    When I select the tool 'CY Test Tool Board-Element Restriction' from available tools
    Then I see tool 'CY Test Tool Board-Element Restriction' is selected
    When I click on save external tool button
    Then I see an external tool element with tool 'CY Test Tool Board-Element Restriction'
    #    Teacher adds a tool with all context restrictions
    When I click on plus icon to add card in column
    When I click on plus icon to add content into card
    When I select external tools from the menu
    When I select the tool 'CY Test Tool All Restrictions' from available tools
    Then I see tool 'CY Test Tool All Restrictions' is selected
    When I click on save external tool button
    Then I see an external tool element with tool 'CY Test Tool All Restrictions'
    #    Teacher adds a tool without any context restriction
    When I click on plus icon to add card in column
    When I click on plus icon to add content into card
    When I select external tools from the menu
    When I select the tool 'CY Test Tool 1' from available tools
    Then I see tool 'CY Test Tool 1' is selected
    When I click on save external tool button
    Then I see an external tool element with tool 'CY Test Tool 1'
    #    Teacher tries to add a preferred tool with context restriction course
    When I click on plus icon to add card in column
    When I click on plus icon to add content into card
    Then I do not see preferred tool 'CY Test Tool Preferred Course Restriction' in the menu
    #    Teacher adds a preferred tool with context restriction board
    Then I see preferred tool 'CY Test Tool Preferred Board Restriction' in the menu
    When I select preferred tool 'CY Test Tool Preferred Board Restriction' from the menu
    Then I see an external tool element with tool 'CY Test Tool Preferred Board Restriction'

    #    Teacher sees ctl tools with context restriction media-board in the media-shelf
    When I go to media shelf
    Then I see the media shelf page title
    Then I see the available media line
    Then I see 3 tools in the available media line
    Then I see tool 'CY Test Tool 1' in the available media line
    Then I see tool 'CY Test Tool Media-Board Restriction' in the available media line
    Then I see tool 'CY Test Tool All Restrictions' in the available media line
    Then I do not see tool 'CY Test Tool Course Restriction' in the available media line
    Then I do not see tool 'CY Test Tool Board-Element Restriction' in the available media line

  @unstable_test
  Scenario: Post-test: Admin deletes a course and external tools
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I click on administration in menu
    When I go to course administration page
    When I click the delete button for course 'Cypress Test Course' in course table
    Then I see the delete modal
    When I click the confirmation button on the delete modal
    Then I do not see course 'Cypress Test Course' in course table

    #     Admin deletes external tools
    When I click on administration in menu
    When I navigate to new school admin page via sub menu
    When I click on external tools panel
    Then I see the external tools table
    When I click on delete button of tool 'CY Test Tool 1'
    When I confirm deletion on deletion dialog
    When I click on delete button of tool 'CY Test Tool Course Restriction'
    When I confirm deletion on deletion dialog
    When I click on delete button of tool 'CY Test Tool Board-Element Restriction'
    When I confirm deletion on deletion dialog
    When I click on delete button of tool 'CY Test Tool Media-Board Restriction'
    When I confirm deletion on deletion dialog
    When I click on delete button of tool 'CY Test Tool All Restrictions'
    When I confirm deletion on deletion dialog
    When I click on delete button of tool 'CY Test Tool Preferred Course Restriction'
    When I confirm deletion on deletion dialog
    When I click on delete button of tool 'CY Test Tool Preferred Board Restriction'
    When I confirm deletion on deletion dialog
