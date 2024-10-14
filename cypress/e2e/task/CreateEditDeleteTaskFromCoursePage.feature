@regression_test
@stable_test
Feature: Task - To create, edit and delete tasks by the teacher.

    As a teacher I want to create, edit, grade, finish, restore and delete a new task so that the student can submit it

    Scenario: Teacher creates, edits, grades, finishes, restores, deletes a task and student can submit, access the task in a course, including pre-conditions

        # pre-condition: admin, teacher and student log in to create their account in a same school
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a course and assign teacher and student to the course
        When I go to rooms overview
        When I click on FAB to create a new room depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title '<course_name>'
        When I select room colour as red
        Then I select teacher '<fullname_teacher>' is selected by default
        Then I see substitute teacher selection box
        Then I see date pickers to start and end the course as per school year
        Then I see button to create a course time table container
        When I click on button Next Steps after entering the room detail in section one
        Then I see section two area on the course create page
        Then I see class selection box to select the class for the room
        Then I see student selection box to select the student for the room
        When I select the student '<fullname_student>' in the list
        When I click on button Next Steps after selecting room participant details
        Then I see the section three as the finish page
        When I click on button To Course Overview on the finish page
        # Note: this step is not applicable for the admin user
        #Then I see the course '<course_name>' on the room overview page

        # teacher creates task as draft from room
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<course_name>'
        When I click on FAB to create new content
        When I click on New Task FAB
        Then I can see create task page
        When I enter title 'CypressAut Task Creating and Deleting Test'
        When I click on Enable Group Submission
        When I click on Draft Checkbox
        When I set task-visibility-start-date to 'today' at '0000'
        When I set task-visibility-due-date to 'tomorrow' at '1000'
        When I enter task description 'Dies ist Deine Aufgabe.'
        When I click on button Submit
        Then I see detail page for task 'CypressAut Task Creating and Deleting Test'
        When I go to rooms overview
        When I go to room '<course_name>'
        Then I see room page '<course_name>'
        Then I can see content 'CypressAut Task Creating and Deleting Test' on course page

        # student does not see task because it is a draft
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<course_name>'
        Then I can not see content 'CypressAut Task Creating, Editing, Deleting Test'

        # teacher edits and publishes task from room via form
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<course_name>'
        When I click on three dot menu of content 'CypressAut Task Creating and Deleting Test'
        When I click on Edit in dot menu
        Then I can see edit task page 'CypressAut Task Creating and Deleting Test'
        When I upload file 'example_jpg.jpg'
        # Note: then the page reloads (this happens automatically after file upload)
        When I enter title 'CypressAut Task Creating, Editing, Deleting Test'
        When I click on Enable Group Submission
        When I set task-visibility-start-date to 'today' at '0100'
        When I set task-visibility-due-date to 'tomorrow' at '1100'
        When I enter task description 'Dies ist Deine Aufgabe. Viel Erfolg!'
        When I click on Public Submission Checkbox
        When I click on Submit Public Submission in confirmation window on task page
        When I click on Draft Checkbox
        When I click on button Submit
        Then I see detail page for task 'CypressAut Task Creating, Editing, Deleting Test'
        When I click on button To Course
        Then I see room page '<course_name>'
        Then I can see content 'CypressAut Task Creating, Editing, Deleting Test' on course page
        Then I see task card info submitted contains '0/1' for task 'CypressAut Task Creating, Editing, Deleting Test'
        When I click on task 'CypressAut Task Creating, Editing, Deleting Test'
        Then I see description is 'Dies ist Deine Aufgabe. Viel Erfolg!'
        Then I see file 'example_jpg.jpg' is visible in section files
        When I click on file 'example_jpg.jpg'
        Then file 'example_jpg.jpg' is displayed in file-viewer
        When I click on file-viewer for file 'example_jpg.jpg'
        Then I click on button Edit
        Then I see public submission is enabled
        Then task-visibility-start-date is 'today' at '01:00'
        Then task-visibility-due-date is 'tomorrow' at '11:00'
        Then Draft is disabled

        # teacher edits file
        When I go to rooms overview
        When I go to room '<course_name>'
        When I click on three dot menu of content 'CypressAut Task Creating, Editing, Deleting Test'
        When I click on Edit in dot menu
        Then I see file 'example_jpg.jpg' is visible in section files
        When I upload file 'test_pdf.pdf'
        When I see file 'example_jpg.jpg' is visible in section files
        When I see file 'test_pdf.pdf' is visible in section files
        When I click on rename file 'test_pdf.pdf'
        When I enter filename 'test_pdf_renamed.pdf' in modal dialog
        When I click on cancel in dialog window
        Then I see file 'test_pdf.pdf' is visible in section files
        When I click on rename file 'test_pdf.pdf'
        When I enter filename 'test_pdf_renamed.pdf' in modal dialog
        When I click on save in confirmation window
        Then I see file 'test_pdf_renamed.pdf' is visible in section files
        When I click on download file 'test_pdf_renamed.pdf'
        Then file 'test_pdf_renamed.pdf' is saved in folder downloads
        When I go to rooms overview
        When I go to room '<course_name>'
        When I click on three dot menu of content 'CypressAut Task Creating, Editing, Deleting Test'
        When I click on Edit in dot menu
        When I click on delete file 'test_pdf_renamed.pdf'
        When I click on cancel in delete file dialog
        Then I see file 'test_pdf_renamed.pdf' is visible in section files
        When I click on delete file 'test_pdf_renamed.pdf'
        When I click on submit in delete file dialog
        Then I see file 'test_pdf_renamed.pdf' is not visible in section files
        Then I see file 'test_pdf.pdf' is not visible in section files
        Then I see file 'example_jpg.jpg' is visible in section files

        # student sees task
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<course_name>'
        When I click on task 'CypressAut Task Creating, Editing, Deleting Test'
        Then I see detail page for task 'CypressAut Task Creating, Editing, Deleting Test'

        # teacher deletes task from room
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<course_name>'
        When I click on three dot menu of content 'CypressAut Task Creating, Editing, Deleting Test'
        When I click on Delete in dot menu
        When I click on Cancel in confirmation window
        # Note: new opening of the room page is necessary to clear DOM from deleted tasks (reload would also work but would need a cy.wait)
        When I arrive on the dashboard
        When I go to rooms overview
        When I go to room '<course_name>'
        Then I can see content 'CypressAut Task Creating, Editing, Deleting Test' on course page
        When I click on three dot menu of content 'CypressAut Task Creating, Editing, Deleting Test'
        When I click on Delete in dot menu
        When I click on Delete in confirmation window
        # Note: new opening of the room page is necessary to clear DOM from deleted tasks (reload would also work but would need a cy.wait)
        When I arrive on the dashboard
        When I go to rooms overview
        When I go to room '<course_name>'
        Then I see room page '<course_name>'
        Then I can not see content 'CypressAut Task Creating, Editing, Deleting Test'

        # Post-condition: Teacher deletes the course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<course_name>'
        When I open page Edit course
        When I click on the button delete course
        Then I see the modal to confirm the deletion
        When I click on the button delete on the modal to confirm the course deletion
        Then I do not see the course '<course_name>' on the room overview page

        @school_api_test
        Examples:
            | namespace | student      | teacher      | admin      | fullname_student  | fullname_teacher  | student_last_name | course_name                           |
            | brb       | student1_brb | teacher1_brb | admin1_brb | cypress student_1 | cypress teacher_1 | student_1         | CypressAut Test Creation and Deletion |

        @staging_test
        Examples:
            | namespace | student      | teacher      | admin      | fullname_student | fullname_teacher | student_last_name | course_name                           |
            | brb       | student1_brb | teacher1_brb | admin1_brb | Herbert Kraft    | Karl Herzog      | Kraft             | CypressAut Test Creation and Deletion |