@regression_test
@stable_test
Feature: Course- Teacher shares a course to other teacher from the same school

    As a teacher I want to share a course to other teachers from the same school

    Scenario: Teacher shares a course to other teacher from the same school

        # pre-condition: Creating teacher accounts
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given I am logged in as a '<teacher_2>' at '<namespace>'

        # pre-condition: teacher creates a course
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        When I enter the course title '<course_name_share>'
        Then I see teacher '<fullname_teacher_1>' is selected by default
        When I click on button Next Steps after entering the course detail in section one
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page
        Then I see the course '<course_name_share>' on the course overview page
        When I go to course '<course_name_share>'
        Then I see course page '<course_name_share>'

        # pre-condition: teacher creates a board
        When I go to the tab contents in course detail page
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see a dialog box for column board
        Then I see in dialog box option for multi-column board
        Then I see in dialog box option for single-column board
        When I choose multi-column board in the dialog box
        Then I see the page Course Board details
        Then I see the chip Draft in the course board
        When I click on the button Add column in the course board
        When I click on the page outside of the column

        # first teacher shares the course with another teacher in the same school using copy link
        When I go to courses overview
        When I go to course '<course_name_share>'
        Then I see course page '<course_name_share>'
        When I click on share course button
        Then I see the share course dialog box
        Then I see the info text in the share course dialog
        Then I see the school internal checkbox as checked
        Then I see the expiry date checkbox as checked
        When I click on the continue button in the share course dialog
        Then I see the import share course url in the share course result dialog
        Then I see the mail button in the share course result dialog
        Then I see the copy link button in the share course result dialog
        Then I see the mail QR-Code button in the share course result dialog
        When I save the import share course url

        # second teacher within the same school imports the course
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to courses overview
        When I visit the saved import url of the shared course
        Then I see the import share course dialog
        Then I see the import share course tools info
        Then I see '<course_name_share>' in the course name field
        When I enter '<course_name_import>' in the course name field
        When I click on the import course button
        When I go to course '<course_name_import>'
        Then I see course page '<course_name_import>'

        # first teacher opens the QR code in the share course result dialog
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name_share>'
        Then I see course page '<course_name_share>'
        When I click on share course button
        Then I see the share course dialog box
        Then I see the info text in the share course dialog
        Then I see the school internal checkbox as checked
        Then I see the expiry date checkbox as checked
        When I click on the continue button in the share course dialog
        Then I see the import share course url in the share course result dialog
        When I click on button qr code in the share course result dialog
        Then I see the qr code in the share course result dialog
        Then I click on the close button in the share course result dialog

        # Post-condition: Teacher deletes the course
         Given I am logged in as a '<teacher_1>' at '<namespace>'
         Given course with name '<course_name_share>' is deleted
         Given I am logged in as a '<teacher_2>' at '<namespace>'
         Given course with name '<course_name_import>' is deleted

@school_api_test
        Examples:
            | teacher_1    | teacher_2    | namespace | fullname_teacher_1 | course_name_share  | course_name_import |
            | teacher1_brb | teacher2_brb | brb       | cypress teacher_1  | Mathe Course Share | Mathe Course Import  |

@staging_test
        Examples:
             | teacher_1    | teacher_2    | namespace | fullname_teacher_1 | course_name_share  | course_name_import |
             | teacher1_brb | teacher2_brb | brb       | cypress teacher_1  | Mathe Course Share | Mathe Course Import  |
