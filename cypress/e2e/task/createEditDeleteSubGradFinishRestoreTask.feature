@api-migrated
@pr
@release
Feature: Task - To create, edit and delete tasks by the teacher.

	As a teacher I want to create, edit, grade, finish, restore and delete a new task so that the student can submit it

	@stable_test
	# This scenario is to create the users using api needed for this feature file.
	Scenario: as a pre-condition admin, teacher and student log in to create their account in a same school
		Given I am logged in as a 'admin1_brb' at 'brb'
		Given I am logged in as a 'teacher1_brb' at 'brb'
		Given I am logged in as a 'student1_brb' at 'brb'


	#@stable_test
	#Scenario: Admin enables student visiblity for a teacher as a pre-condition
	#Given I am logged in as a 'admin1_brb' at 'brb'
	#When I go to administration page
	#When I go to school administration
	#remove the following line if old admin page is hidden
	#When I go to new school administration page  --> //Currently admin page is not opening due to the issue on admin user created by using api.
	#When I click on general settings panel
	#When I click the toggle switch to enable student visibility for teachers
	#When I click on button Save admin settings

	@stable_test
	Scenario:Admin creates a course and assign teacher and student to the course as a pre-condition
		Given I am logged in as a 'admin1_brb' at 'brb'
		When I go to rooms overview
		When I click on FAB to create a new room
		When I click on new course create button in sub menu
		Then I see section one area on the course create page
		When I enter the course title 'CypressAut Test Creation and Deletion'
		When I select room colour as red
		Then I select teacher 'cypress test' is selected by default
		Then I see substitute teacher selection box
		Then I see date pickers to start and end the course as per school year
		Then I see button to create a course time table container
		When I click on button Next Steps after entering the room detail in section one
		Then I see section two area on the course create page
		Then I see class selection box to select the class for the room
		Then I see student selection box to select the student for the room
		When I select the student 'cypress test' in the list
		When I click on button Next Steps after selecting room participant details
		Then I see the section three as the finish page
		When I click on button To Course Overview on the finish page
	#Then I see the course 'CypressAut Test Creation and Deletion' on the room overview page  //Not applicable for the admin user


	@stable_test
	Scenario: Teacher creates task as draft from room
		Given I am logged in as a 'teacher1_brb' at 'brb'
		When I go to rooms overview
		When I go to room 'CypressAut Test Creation and Deletion'
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
		When I go to room 'CypressAut Test Creation and Deletion'
		Then I can see room page 'CypressAut Test Creation and Deletion'
		And I can see content 'CypressAut Task Creating and Deleting Test' on course page

	@stable_test
	Scenario: Teacher edits and publishes task from room via form
		Given I am logged in as a 'teacher1_brb' at 'brb'
		When I go to rooms overview
		When I go to room 'CypressAut Test Creation and Deletion'
		When I click on three dot menu of content 'CypressAut Task Creating and Deleting Test'
		When I click on Edit in dot menu
		Then I can see edit task page 'CypressAut Task Creating and Deleting Test'
		When I upload file 'example_jpg.jpg'
		# Then the page reloads (this happens automatically after file upload)
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
		Then I can see room page 'CypressAut Test Creation and Deletion'
		And I can see content 'CypressAut Task Creating, Editing, Deleting Test' on course page
		Then I see task card info submitted contains '0/1' for task 'CypressAut Task Creating, Editing, Deleting Test'
		When I click on task 'CypressAut Task Creating, Editing, Deleting Test'
		Then I see description is 'Dies ist Deine Aufgabe. Viel Erfolg!'
		And I see file 'example_jpg.jpg' is visible in section files
		When I click on file 'example_jpg.jpg'
		Then file 'example_jpg.jpg' is displayed in file-viewer
		When I click on file-viewer for file 'example_jpg.jpg'
		And I click on button Edit
		Then I see public submission is enabled
		And task-visibility-start-date is 'today' at '01:00'
		And task-visibility-due-date is 'tomorrow' at '11:00'
		And Draft is disabled

	@stable_test
	Scenario: Teacher edits file
		Given I am logged in as a 'teacher1_brb' at 'brb'
		When I go to rooms overview
		When I go to room 'CypressAut Test Creation and Deletion'
		When I click on three dot menu of content 'CypressAut Task Creating, Editing, Deleting Test'
		And I click on Edit in dot menu
		Then I see file 'example_jpg.jpg' is visible in section files
		When I upload file 'test_pdf.pdf'
		And I see file 'example_jpg.jpg' is visible in section files
		And I see file 'test_pdf.pdf' is visible in section files
		When I click on rename file 'test_pdf.pdf'
		When I enter filename 'test_pdf_renamed.pdf' in modal dialog
		And I click on cancel in dialog window
		Then I see file 'test_pdf.pdf' is visible in section files
		When I click on rename file 'test_pdf.pdf'
		And I enter filename 'test_pdf_renamed.pdf' in modal dialog
		And I click on save in confirmation window
		Then I see file 'test_pdf_renamed.pdf' is visible in section files
		When I click on download file 'test_pdf_renamed.pdf'
		Then file 'test_pdf_renamed.pdf' is saved in folder downloads
		When I go to rooms overview
		When I go to room 'CypressAut Test Creation and Deletion'
		When I click on three dot menu of content 'CypressAut Task Creating, Editing, Deleting Test'
		And I click on Edit in dot menu
		And I click on delete file 'test_pdf_renamed.pdf'
		And I click on cancel in delete file dialog
		Then I see file 'test_pdf_renamed.pdf' is visible in section files
		When I click on delete file 'test_pdf_renamed.pdf'
		And I click on submit in delete file dialog
		Then I see file 'test_pdf_renamed.pdf' is not visible in section files
		And I see file 'test_pdf.pdf' is not visible in section files
		And I see file 'example_jpg.jpg' is visible in section files

	@stable_test
	Scenario: Student submits task
		Given I am logged in as a 'student1_brb' at 'brb'
		When I go to rooms overview
		When I go to room 'CypressAut Test Creation and Deletion'
		And I click on task 'CypressAut Task Creating, Editing, Deleting Test'
		Then I see detail page for task 'CypressAut Task Creating, Editing, Deleting Test'
		When  I click on submission tab
		When I enter text submission 'Hier ist die Antwort.'
		When I upload file 'testboard_jpg' for submission
		Then I see file 'testboard_jpg' is visible in uploaded files section of submission
		When I click on button Send Submission
		Then I see hint that submission has been sent successfully
		When I go to tasks overview
		Then I do not see task 'CypressAut Task Creating, Editing, Deleting Test' in the list as student
		And I click completed task tab
		And I click on not graded tasks
		Then I see task 'CypressAut Task Creating, Editing, Deleting Test' in the list as student


	@stable_test
	Scenario: Teacher grades task from room
		Given I am logged in as a 'teacher1_brb' at 'brb'
		When I go to rooms overview
		When I go to room 'CypressAut Test Creation and Deletion'
		Then I see task card info submitted contains '1/1' for task 'CypressAut Task Creating, Editing, Deleting Test'
		And Task card info graded contains '0/1' for task 'CypressAut Task Creating, Editing, Deleting Test'
		When I click on task 'CypressAut Task Creating, Editing, Deleting Test'
		And I click on submissions tab
		Then there is a tick in column delivered for 'test'
		When I click on submission of 'test'
		Then I see submission text 'Hier ist die Antwort.'
		When I click on download file 'testboard_jpg' in submission
		Then file 'testboard_jpg' is saved in folder downloads
		When I click on grading tab
		And I upload file 'gradingfile-pdf.pdf'
		Then I see file 'gradingfile-pdf.pdf' is visible in uploaded files section
		And I enter comment 'Gut gemacht!'
		And I enter grade '83'
		And I click on button Save and Send grading
		Then there is a tick in column delivered for 'test'
		And grading for 'test' contains '83'
		When I click on button To Course
		Then I see task card info submitted contains '1/1' for task 'CypressAut Task Creating, Editing, Deleting Test'
		And Task card info graded contains '1/1' for task 'CypressAut Task Creating, Editing, Deleting Test'

	@stable_test
	Scenario: Student sees grading
		Given I am logged in as a 'student1_brb' at 'brb'
		When I go to tasks overview
		And I click completed task tab
		Then I see task 'CypressAut Task Creating, Editing, Deleting Test' in the list as student
		And I click on task 'CypressAut Task Creating, Editing, Deleting Test' in tasks overview
		Then I see submission text 'Hier ist die Antwort.'
		When I click on feedback tab
		Then I see feedback text 'Gut gemacht!'
		And I see grade is '83'
		When I click on download file 'gradingfile-pdf.pdf' in grading
		Then file 'gradingfile-pdf.pdf' is saved in folder downloads

	@stable_test
	Scenario: Teacher finishes task from room
		Given I am logged in as a 'teacher1_brb' at 'brb'
		When I go to rooms overview
		When I go to room 'CypressAut Test Creation and Deletion'
		And I click on link finish for task 'CypressAut Task Creating, Editing, Deleting Test'
		Then I see task 'CypressAut Task Creating, Editing, Deleting Test' does not contain any buttons

	@stable_test
	Scenario: Teacher restores the finished task from room
		Given I am logged in as a 'teacher1_brb' at 'brb'
		When I go to tasks overview
		# And I open task list with due date // Icon to open this is only available if there are other tasks with due date (not guaranteed in environment)
		Then I do not see task 'CypressAut Task Creating, Editing, Deleting Test' in the list as teacher
		When I click on finished tab
		Then I see task 'CypressAut Task Creating, Editing, Deleting Test' in the list as teacher
		When I click on dot menu of task 'CypressAut Task Creating, Editing, Deleting Test'
		And I click on Restore
		Then I do not see task 'CypressAut Task Creating, Editing, Deleting Test' in the list as teacher
		When I click on open tasks tab
		And I open task list with due date
		Then I see task 'CypressAut Task Creating, Editing, Deleting Test' in the list as teacher
		When I arrive on the dashboard
		When I go to rooms overview
		When I go to room 'CypressAut Test Creation and Deletion'
		Then I see task 'CypressAut Task Creating, Editing, Deleting Test' contains buttons

	@stable_test
	Scenario: Teacher deletes task from room
		Given I am logged in as a 'teacher1_brb' at 'brb'
		When I go to rooms overview
		When I go to room 'CypressAut Test Creation and Deletion'
		When I click on three dot menu of content 'CypressAut Task Creating, Editing, Deleting Test'
		And I click on Delete in dot menu
		And I click on Cancel in confirmation window
		# new opening of the room page is necessary to clear DOM from deleted tasks (reload would also work but would need a cy.wait)
		When I arrive on the dashboard
		When I go to rooms overview
		When I go to room 'CypressAut Test Creation and Deletion'
		Then I can see content 'CypressAut Task Creating, Editing, Deleting Test' on course page
		When I click on three dot menu of content 'CypressAut Task Creating, Editing, Deleting Test'
		And I click on Delete in dot menu
		And I click on Delete in confirmation window
		# new opening of the room page is necessary to clear DOM from deleted tasks (reload would also work but would need a cy.wait)
		When I arrive on the dashboard
		When I go to rooms overview
		When I go to room 'CypressAut Test Creation and Deletion'
		Then I can see room page 'CypressAut Test Creation and Deletion'
		And I can not see content 'CypressAut Task Creating, Editing, Deleting Test'
