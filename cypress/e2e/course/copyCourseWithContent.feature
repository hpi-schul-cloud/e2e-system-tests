@regression_test
@stable_test
@group-N
@schedule_run
Feature: Course - Copy course

    As a Teacher I want to be able to copy a course

    Scenario: Teacher copies a course
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a course and assign teacher and student to the course
        Given a course with name '<course_name>' exists with '<fullname_teacher>' as teacher and '<fullname_student>' as student
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a multi-column board named '<board_title>' exists in the course '<course_name>'
        Given the multi-column board has a column with a card
        Given the card has a folder named '<folder_name>'
        Given the folder '<folder_name>' contains files '<image_file_name>'

        # teacher copies the course
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on copy course button
        Then I see the copy result notification
        When I close the dialog
        When I go to courses overview
        When I go to course '<course_name_copy>'
        Then I see course page '<course_name_copy>'
        When I click on card Course Board
        When I click on three dot menu in the board header
        When I click on the option Publish in three dot menu in course board

        # teacher adds a student to newly copied course
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to course administration page via sub menu
        Then I see the new course administration page
        When I click on the edit button of course '<course_name_copy>'

        # When I open page Edit course
        # Then I see page Edit course
        When I add the first student with search string '<searchstring_student>' to the course
        When I click on button Save changes in page Edit course

        # student sees the copied course
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name_copy>'
        Then I see course page '<course_name_copy>'
        # student sees the course board, the file folder, and the files inside
        When I click on card Course Board
        Then I see a folder with name '<folder_name>' in the card
        When I click on the folder '<folder_name>' in the card
        Then I see files '<image_file_name>' in file list

        # post-condition: teacher deletes courses
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given course with name '<course_name>' is deleted
        Given course with name '<course_name_copy>' is deleted

        @school_api_test
        Examples:
            | admin      | teacher      | student      | namespace | course_name           | course_name_copy          | fullname_teacher  | fullname_student  | searchstring_student | board_title                   | folder_name         | image_file_name |
            | admin1_brb | teacher1_brb | student1_brb | brb       | CypressAut CourseCopy | CypressAut CourseCopy (1) | cypress teacher_1 | cypress student_1 | student_1            | Cypress Board for Copy Course | Cypress File Folder | example_jpg.jpg |

        @staging_test
        Examples:
            | admin      | teacher      | student      | namespace | course_name           | course_name_copy          | fullname_teacher | fullname_student | board_title                   | folder_name         |
            | admin1_brb | teacher1_brb | student1_brb | brb       | CypressAut CourseCopy | CypressAut CourseCopy (1) | Karl Herzog      | Herbert Kraft    | Cypress Board for Copy Course | Cypress File Folder |
