const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Files from "../../pages/files/pageFiles";

const files = new Files();

Then("I see the folder title {string} in course files", (FolderName) => {
  files.fileFolderTitleVisible(FolderName);
});

When("I click on the folder {string} in files section", (FolderName) => {
  files.clickOnFolderCourse(FolderName);
});

When("I click on the button Create a new folder", () => {
  files.createNewFolderInCourseFiles();
});

Then("I see the dialog for new folder creation in course files", () => {
  files.folderCreationDialogVisible();
});

When("I enter folder name {string} in course files", (folderName) => {
  files.enterFolderName(folderName);
});

When("I click on the button New folder creation in course files", () => {
  files.submitNewFolderInCourseFiles();
});

Then("I see the new folder {string} in the folder list", (folderName) => {
  files.folderTitleVisible(folderName);
});

When("I upload a file {string} in course files", (uploadFiles) => {
  files.uploadFileInCourseFiles(uploadFiles);
});

Then("I see the uploaded file {string} in the file list", (fileName) => {
  files.seeFileInFilesList(fileName);
});

When("I click on the uploaded file {string} in course files", (fileName) => {
  files.clickOnFileInCourseFiles(fileName);
});

Then("I can see the preview of file {string}", (fileName) => {
  files.filePreviewIsShown(fileName);
});

When("I close the preview by clicking on the file preview", () => {
  files.clickOnPreviewedFile();
});

When("I click on delete the course folder {string} in course files", (folderName) => {
  files.deleteCourseFolder(folderName);
});

When("I click on the button Delete in coursefiles", () => {
  files.clickOnConfirmDeleteCourseFileOnModal();
});

When("I click on button Edit on course folder {string}", (folderName) => {
  files.editbuttonCourseFolderName(folderName);
});

When("I edit folder name {string} in course files", (newFolderName) => {
  files.renameFolderName(newFolderName);
});
