@unstable_test
Feature: Media Shelf - To show media shelf with respective functionality

  As an teacher I want to use the media shelf

  @unstable_test
  Scenario: Pre-test: Admin adds external tools to school
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I click on administration in menu
    When I click on sub menu school and see new admin page
    When I click on external tools panel
    When I click the add external tool button
    When I select the tool 'CY Test Tool 1' from available tools
    When I click on save external tool button
    When I click the add external tool button
    When I select the tool 'CY Test Tool 2' from available tools
    When I click on save external tool button
    Then I see the tool 'CY Test Tool 1' in external tools table
    Then I see the tool 'CY Test Tool 2' in external tools table

  @unstable_test
  Scenario Outline: Teacher opens media shelf
    Given I am logged in as a '<user>' at '<namespace>'
    When I go to media shelf
    Then I see the media shelf page title
    Then I see the available media line
    Then I see 2 tools in the available media line
    Then I see tool 'CY Test Tool 1' in the available media line
    Then I see tool 'CY Test Tool 2' in the available media line
    Then I see the thumbnail, title and description of media element 'CY Test Tool 1'
    When I click on grid layout button
    Then I see the grid layout
    When I click on list layout button
    Then I see the list layout
    #    Teachers tests available media line
    When I click on collapse available media line button
    Then I see the available media line is collapsed
    When I click on collapse available media line button
    Then I see the available media line is not collapsed
    When I click on tree dot menu button on available media line
    Then I see the available media line menu
    When I click on color picker button
    Then I see the available background colors
    When I select the background color
    Then I see the available media line has background color 'rgb(251, 233, 231)'
    #    Teachers tests first media line
    When I click add media line button
    Then I see the first media line
    When I double click on the title of the first median line
    When I edit the title of the first median line to 'Test Abschnitt'
    Then I see the first media line with title 'Test Abschnitt'
    When I click the collapse button on the first media line
    Then I see the first media line is collapsed
    When I click the collapse button on the first media line
    Then I see the first media line is not collapsed
    When I click the tree dot menu button on the first media line
    Then I see the media line menu
    When I click on edit title button
    When I edit the title of the first median line to 'Favoriten'
    Then I see the first media line with title 'Favoriten'
    When I click the tree dot menu button on the first media line
    Then I see the media line menu
    When I click on color picker button
    Then I see the available background colors
    When I select the background color
    Then I see the first media line has background color 'rgb(251, 233, 231)'
    When I click the tree dot menu button on the first media line
    Then I see the media line menu
    When I click on delete media line button
    Then I see the first media line has been deleted
    Examples:
      | user         | namespace |
      | teacher1_nbc | nbc       |
      | student2_nbc | nbc       |

  @unstable_test
  Scenario: Post-test: Admin deletes external tools
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I click on administration in menu
    When I click on sub menu school and see new admin page
    When I click on external tools panel
    Then I see the external tools table
    When I click on delete button of tool 'CY Test Tool 1'
    When I confirm deletion on deletion dialog
    When I click on delete button of tool 'CY Test Tool 2'
    When I confirm deletion on deletion dialog
