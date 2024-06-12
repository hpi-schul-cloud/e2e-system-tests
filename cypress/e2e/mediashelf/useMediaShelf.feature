Feature: Media Shelf - To show media shelf with respective functionality

  @unstable_test
  Scenario: Pre-test: Admin adds external tools to school
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I go to school administration
    When I click on external tools panel
    When I click the add external tool button
    When I select the tool 'CY Test Tool 1' from available tools
    When I click on save external tool button
    When I click on external tools panel
    When I click the add external tool button
    When I select the tool 'CY Test Tool 2' from available tools
    When I click on save external tool button
    When I click on external tools panel
    When I click the add external tool button
    When I select the tool 'LTI Test Tool' from available tools
    When I click on save external tool button
    When I click on external tools panel
    When I click the add external tool button
    When I select the tool 'Moodle Fortbildung' from available tools
    When I click on save external tool button
    When I click on external tools panel
    Then I see the tool 'CY Test Tool 1' in external tools table
    Then I see the tool 'CY Test Tool 2' in external tools table
    Then I see the tool 'LTI Test Tool' in external tools table
    Then I see the tool 'Moodle Fortbildung' in external tools table

  @unstable_test
  Scenario: Teacher opens media shelf
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to media shelf
    Then I see the media shelf page title
    Then I see the available media line
    Then I see 4 tools in the available media line
    Then I see the thumbnail, title and description of media element 'CY Test Tool 1'
#    test layouts
    When I click on grid layout button
    Then I see the grid layout
    When I click on list layout button
    Then I see the list layout
#    test available media line
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
#    test media line
    When I click add media line button
    Then I see the first media line
    When I double click on media line title
    When I edit the media line title to 'Test Abschnitt'
    Then I see the media line with title 'Test Abschnitt'
    When I click on collapse media line button
    Then I see the media line is collapsed
    When I click on collapse media line button
    Then I see the media line is not collapsed
    When I click on tree dot menu button on media line
    Then I see the media line menu
    When I click on edit title button
    When I edit the media line title to 'Favoriten'
    Then I see the media line with title 'Favoriten'
    When I click on tree dot menu button on media line
    Then I see the media line menu
    When I click on color picker button
    Then I see the available background colors
    When I select the background color
    Then I see the media line has background color 'rgb(251, 233, 231)'
    When I click on tree dot menu button on media line
    Then I see the media line menu
    When I click on delete media line button
    Then I see the first media line has been deleted

#    When I move tool 'CY Test Tool 1' to a new media line
#    Then I see 1 tools in the first media line
#    Then I see 3 tools in the available media line

#    When I move tool 'CY Test Tool 2' to a new media line
#    When I move tool 'CYTestToolSchoolScope' to a new media line
#    When I move tool 'CYTestToolSchoolScope' to the available media line
#    When I move tool 'CYTestToolSchoolScope' to first media line
#    When I move tool 'CY Test Tool 2' to first media line
#    When I move tool 'CY Test Tool 1' to the available media line


#     When I click on tree dot menu button on media line
#     Then I see the media line menu
#     When I click on delete media line button
#     Then I see the first media line has been deleted
#
#    Then I see the deactivated chip on media element 'LTITestTool'
#    Then I see the not licensed chip on media element 'LizenzTestTool'
#    Then I see the incomplete chip on media element 'CYTestToolSchoolScope'
#    Then I see the not licensed chip on media element 'LizenzTestTool2'
#    Then I see the incomplete chip on media element 'LizenzTestTool2'
#    When I click on media element 'LizenzTestTool2'


  @unstable_test
  Scenario: Post-test: Admin deletes external tools
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I go to school administration
    When I click on external tools panel
    Then I see the external tools table
    When I click on delete button of tool 'CY Test Tool 1'
    When I confirm deletion on deletion dialog
    When I click on delete button of tool 'CY Test Tool 2'
    When I confirm deletion on deletion dialog
