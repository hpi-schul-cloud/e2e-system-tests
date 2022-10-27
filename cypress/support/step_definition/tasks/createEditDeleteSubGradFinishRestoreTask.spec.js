import Tasks from '../../pages/tasks/pageTasks'

const tasks = new Tasks()

// EXTERNAL COMMON STEP DEFINITIONS
// =========================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\authentication\loginStep.spec.js
// -->\step_definition\course\commonCourseSteps.spec.js
// -->\step_definition\tasks\commonTaskSteps.spec.js

Then('I can see create task page', () => {
  tasks.seeCreateTaskPage()
})

And('file upload button is disabled', () => {
  tasks.seeUploadFileButtonIsDisabled()
})

When ('I enter title {string}', (taskTitle) => {
  tasks.enterTaskTitle(taskTitle)
})

And ('I click on Enable Group Submission', () => {
  tasks.clickOnGroupSubmissionCheckbox()
})

And ('I click on Draft Checkbox', () => {
  tasks.clickOnDraftCheckbox()
})

And ('I set task-visibility-start-date to {string} at {string}', (visibilityStartDate, visibilityStartTime) => {
  tasks.setVisibilityStartDate(visibilityStartDate, visibilityStartTime)
})

And ('I set task-visibility-due-date to {string} at {string}', (visibilityDueDate, visibilityDueTime) => {
  tasks.setVisibilityDueDate(visibilityDueDate, visibilityDueTime)
})

And ('I enter task description {string}', (taskDescription) => {
  tasks.setTaskText(taskDescription)
})

Then('I see file upload button is enabled', () => {
  tasks.seeUploadFileButtonIsEnabled()
})

When('I upload file {string}', (fileName) => {
  tasks.executeFileUpload(fileName)
})

When('I upload file {string} for submission', (fileName) => {
  tasks.executeFileUploadForSubmission(fileName)
})

And('I click on Public Submission Checkbox', () => {
  tasks.clickOnPublicSubmissionCheckbox()
})

And('I click on Submit Public Submission in confirmation window on task page', () => {
  tasks.clickOnSubmitInConfirmationWindow()
})

Then('I see description is {string}', (expectedDescription) => {
  tasks.compareDescriptionOnDetailpage(expectedDescription)
})

When ('I click on button Edit', () => {
  tasks.clickOnEditInTaskDetails()
})

Then ('I see public submission is enabled', () => {
  tasks.publicSubmissionIsEnabled()
})

And ('task-visibility-start-date is {string} at {string}', (visibilityStartDate, visibilityStartTime) => {
  tasks.compareVisibilityStartDate(visibilityStartDate, visibilityStartTime)
})

And ('task-visibility-due-date is {string} at {string}', (visibilityDueDate, visibilityDueTime) => {
  tasks.compareVisibilityDueDate(visibilityDueDate, visibilityDueTime)
})

And ('Draft is disabled', () => {
  tasks.seeDraftIsDisabled()
})

Then('I see file {string} is visible in section files', (fileName) => {
  tasks.seeFileInSectionFilesInEditTask(fileName)
})

Then('I see file {string} is visible in uploaded files section', (fileName) => {
  tasks.seeFileInSectionUploadedFiles(fileName)
})

Then('I see file {string} is not visible in section files', (fileName) => {
  tasks.fileIsNotVisibleInSectionFiles(fileName)
})

When('I click on file {string}', (fileName) => {
  tasks.clickOnFileInTaskEditPage(fileName)
})

Then('file {string} is displayed in file-viewer', (fileName) => {
  tasks.seeFileInFileViewer(fileName)
})

When('I click on file-viewer for file {string}', (fileName) => {
  tasks.clickOnFileViewer(fileName)
})

When('I click on rename file {string}', (fileName) => {
  tasks.clickOnRenameFile(fileName)
})

When('I enter filename {string} in modal dialog', (newFileName) => {
  tasks.enterNewFileName(newFileName)
})

And('I click on cancel in dialog window', () => {
  tasks.cancelRenameFileDialog()
})

And('I click on save in confirmation window', () => {
tasks.submitRenameFileDialog()
})

When('I click on download file {string}', (fileName) => {
  tasks.clickDownloadFile(fileName)
})

When('I click on download file {string} in submission', (fileName) => {
  tasks.clickDownloadFileInSubmission(fileName)
})

When('I click on download file {string} in grading', (fileName) => {
  tasks.clickDownloadFileInGrading(fileName)
})

Then('file {string} is saved in folder downloads', (fileName) => {
  tasks.seeFileIsSavedInDownloads(fileName)
})

When('I click on delete file {string}', (fileName) => {
  tasks.clickOnDeleteFile(fileName)
})

And('I click on cancel in delete file dialog', () => {
  tasks.cancelDeleteFileDialog()
})

And('I click on submit in delete file dialog', () => {
  tasks.submitDeleteFileDialog()
})

Then('I see detail page for task {string}', (taskTitle) => {
  tasks.seeDetailPageForTask(taskTitle)
})

And ('I enter text submission {string}', (submissionText) => {
  tasks.setTaskText(submissionText)
})

And('I click on button Save and Send Submission', () => {
  tasks.clickSaveAndSendSubmissionBtn()
})

Then('I see hint that submission has been sent successfully', () => {
  tasks.seeSubmissionReceivedHint()
})

When('I click on button To-Room', () => {
  tasks.clickOnToRoomBtn()
})

And('I click completed task tab', () => {
  tasks.clickOnTabDoneTasks()
})

And('I click on not graded tasks', () => {
  tasks.openNotGradedTasks()
})

Then('I see task {string} in the list as teacher', taskTitle => {
  tasks.seeTaskInListAsTeacher(taskTitle)
})

Then('I do not see task {string} in the list as teacher', taskTitle => {
  tasks.seeTaskNotInListAsTeacher(taskTitle)
})

Then('I see task {string} in the list as student', taskTitle => {
  tasks.seeTaskInListAsStudent(taskTitle)
})

Then('I do not see task {string} in the list as student', taskTitle => {
  tasks.seeTaskNotInListAsStudent(taskTitle)
})

When('I click on task {string} in task overview', taskTitle => {
  tasks.openTaskInTaskOverview(taskTitle)
})

And('I click on submissions tab', () => {
  tasks.clickSubmissionsTab()
})

Then('there is a tick in column delivered for {string}', studentLastname => {
  tasks.seeTickInStudentsSubmissionLine(studentLastname)
})

When('I click on submission of {string}', studentLastname => {
  tasks.openStudentsSubmission(studentLastname)
})

Then('I see submission text {string}', (submissionText) => {
  tasks.compareSubmissionText(submissionText)
})

When('I click on grading tab', () => {
  tasks.clickOnGradingTab()
})

When('I click on submission tab', () => {
  tasks.clickSubmissionTab()
})

And ('I enter comment {string}', (gradingText) => {
  tasks.setTaskText(gradingText)
})

And('I enter grade {string}', (gradingPercent) => {
  tasks.enterGradingPercent(gradingPercent)
})

And('I click on button Save and Send grading', () => {
  tasks.clickSaveAndSendGradingBtn()
})

And('grading for {string} contains {string}', (studentLastname, gradingPercent) => {
  tasks.checkGradingForStudent(studentLastname, gradingPercent)
})

When('I click on button To Course', () => {
  tasks.clickOnButtonToParentCourse()
})

When('I click on feedback tab', () => {
  tasks.clickOnFeedbackTab()
})

When('I see feedback text {string}', feedbackText => {
  tasks.compareFeedbackText(feedbackText)
})

And('I see grade is {string}', feedbackGrade => {
  tasks.compareFeedbackGrade(feedbackGrade)
})

When('I click on open tasks tab', () => {
  tasks.clickOnOpenTasksTab()
})

When('I click on finished tab', () => {
  tasks.clickOnFinishedTab()
})

When('I click on dot menu of task {string}', taskTitle => {
  tasks.clickOnTaskDotMenu(taskTitle)
})

And('I click on Restore', () => {
  tasks.clickTaskFinishInDotMenu()
})

And('I open task list with due date', () => {
  tasks.clickLowerTaskSectionIcon()
})

