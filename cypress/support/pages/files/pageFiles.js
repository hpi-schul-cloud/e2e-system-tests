"use strict";

class Files {
	static #newFile = '[data-testid="create-new-file-btn"]';
	static #filetypeDropdown = "#file_ending_chosen";
	static #filetypeDocument = "li.active-result:nth-child(2)";
	static #filetypeTable = "li.active-result:nth-child(3)";
	static #filetypePresentation = "li.active-result:nth-child(4)";
	static #filenameInputField = "#file-name";
	static #newFilenameInputField = '[data-testid="folder-rename-text-field"]';
	static #createFileButtonOnModal = '[data-testid="btn-submit-Neue Datei erstellen"]';
	static #downloadFile = '[data-testid="file-download-btn"]';
	static #renameFile = '[data-testid="file-edit-btn"]';
	static #saveRenameFile = '[data-testid="submit-btn-rename-modal"]';
	static #deleteFile = '[data-testid="file-delete-btn"]';
	static #confirmDeleteFile = '[data-testid="delete-files-btn"]';
	static #shareFile = '[data-testid="file-share-btn"]';
	static #moveFile = '[data-testid="file-move-btn"]';
	static #filePermissionsFile = '[data-testid="file-settings-btn"]';
	static #cardTitle = '[data-testid="file-title"]';
	static #pageTitle = '[data-testid="LibreOffice Online"]';
	static #deleteDialogBoxPopupContainer = '[data-testid="modal_content"]';
	static #filesOverviewNavigationButton = '[data-testid="sidebar-files"]';
	static #personalFilesOverviewNavigationButton =
		'[data-testid="sidebar-files-personalfiles"]';
	static #coursesFilesOverviewNavigationButton =
		'[data-testid="sidebar-files-coursefiles"]';
	static #teamsFilesOverviewNavigationButton =
		'[data-testid="sidebar-files-teamfiles"]';
	static #sharedFilesOverviewNavigationButton =
		'[data-testid="sidebar-files-sharedfiles"]';
	static #editFilePopupBoxTitle = '[data-testid="popup-title"]';
	static #editFilePopupBoxTextField = '[data-testid="folder-rename-text-field"]';
	static #fileFolderTitle = '[data-testid="folder-open-button"]';
	static #createNewFolderInCourseFilesButton = '[data-testid="create-new-folder-btn"]';
	static #dialogNewFolder = '[data-testid="modal_content"]';
	static #submitNewFolderInCourseFilesButton =
		'[data-testid="btn-submit-Neuer Ordner"]';
	static #uploadFileInCourseFiles = '[data-testid="fileupload-input"]';
	static #courseFolderDelete = '[data-testid="delete-folder"]';
	static #courseFolderNameEdit = '[data-testid="edit-folder-name"]';
	static #folderRenameTextField = '[data-testid="folder-rename-text-field"]';

	static #testAssertionData = {
		fileTypeDocument: "Textdokument (docx)",
		libraOfficeOpenTitleText: "LibreOffice Online",
	};

	openFilesMenu() {
		cy.get(Files.#filesOverviewNavigationButton).click();
	}

	navigateToPersonalFilesOverview() {
		cy.get(Files.#personalFilesOverviewNavigationButton).click();
		cy.wait("@alerts_api");
		cy.url().should("include", "/files/my");
	}

	navigateToCourseFilesOverview() {
		cy.get(Files.#coursesFilesOverviewNavigationButton).click();
		cy.wait("@alerts_api");
		cy.url().should("include", "/files/courses");
	}

	navigateToTeamsFilesOverview() {
		cy.get(Files.#teamsFilesOverviewNavigationButton).click();
		cy.wait("@alerts_api");
		cy.url().should("include", "/files/teams");
	}

	navigateToSharedFilesOverview() {
		cy.get(Files.#sharedFilesOverviewNavigationButton).click();
		cy.wait("@alerts_api");
		cy.url().should("include", "/files/shared");
	}

	clickOnCreateNewFile() {
		cy.get(Files.#newFile).click();
	}

	selectFiletypeDocument() {
		cy.get(Files.#filetypeDropdown).click();
		cy.get(Files.#filetypeDocument)
			.contains(Files.#testAssertionData.fileTypeDocument)
			.should("be.visible")
			.click();
	}

	typeFilename(fileName) {
		cy.get(Files.#filenameInputField)
			.should("be.visible")
			.type(fileName, { delay: 50 })
			.should("have.value", fileName);
	}

	clickOnCreateFile() {
		cy.get(Files.#createFileButtonOnModal).click();
	}

	clickOnFileWithName(fileName) {
		cy.get(Files.#cardTitle).contains(fileName).should("be.visible").click();
	}

	clickOnRenameFile(fileName) {
		cy.get(Files.#cardTitle)
			.contains(fileName)
			.then(() => {
				cy.get(Files.#renameFile).first().click();
			});
	}

	renamePopupBoxVisible(fileName) {
		cy.get(Files.#editFilePopupBoxTextField)
			.should("be.visible")
			.should("have.value", fileName);
	}

	typeNewFilename(fileName) {
		cy.get(Files.#newFilenameInputField)
			.focus()
			.clear()
			.type(fileName, { force: true })
			.should("have.value", fileName);
	}

	clickOnSaveFilename() {
		cy.get(Files.#saveRenameFile).click();
		cy.wait("@alerts_api");
	}

	clickOnDeleteFile(fileName) {
		cy.get(Files.#cardTitle)
			.contains(fileName)
			.then(() => {
				cy.get(Files.#deleteFile).first().should("be.visible").click();
				cy.get(Files.#deleteDialogBoxPopupContainer).should("be.visible");
			});
	}

	clickOnConfirmDeleteFileOnModal() {
		cy.get(Files.#confirmDeleteFile).focus().click();
	}

	libreOfficeOpens() {
		cy.url().should("include", "/files/file/");
		cy.wait("@alerts_api");
		cy.contains(
			Files.#pageTitle,
			Files.#testAssertionData.libraOfficeOpenTitleText
		).should("be.visible");
	}

	fileNameIsShown(fileName) {
		cy.get(Files.#cardTitle).should("contain", fileName);
	}

	fileNameIsNotShown(fileName) {
		cy.contains(fileName).should("not.exist");
	}

	//doesn't work
	enterTextIntoDocument(text) {
		cy.wait(600);
		cy.get(".leaflet-layer").type(text, { force: true });
	}

	//doesn't work
	textIsShownInDocument(text) {
		cy.intercept("/lool/*").as("loleaflet");
		cy.wait("@loleaflet");
		cy.get("iframe").should("contain", text);
	}

	fileFolderTitleVisible(FolderName) {
		cy.get(Files.#fileFolderTitle).contains(FolderName).should("be.visible");
	}

	clickOnFolderCourse(FolderName) {
		cy.get(Files.#fileFolderTitle).contains(FolderName).click();
	}

	createNewFolderInCourseFiles() {
		cy.get(Files.#createNewFolderInCourseFilesButton).click();
	}

	folderCreationDialogVisible() {
		cy.get(Files.#dialogNewFolder).should("be.visible");
	}

	enterFolderName(folderName) {
		cy.get(Files.#dialogNewFolder)
			.filter(":visible")
			.within(() => {
				cy.get('input[name="new-dir-name"]')
					.should("exist")
					.and("be.visible")
					.clear({ force: true }) // need to force clear, sometimes it fails
					.type(folderName, { force: true }); // sometimes the typing fails if not forced
			});
	}

	submitNewFolderInCourseFiles() {
		cy.get(Files.#submitNewFolderInCourseFilesButton).click();
	}

	folderTitleVisible(folderName) {
		cy.get(Files.#fileFolderTitle).contains(folderName).should("be.visible");
	}

	uploadFileInCourseFiles(fileName) {
		cy.get(Files.#uploadFileInCourseFiles)
			.should("exist")
			.attachFile(fileName, { timeout: 1000 });
		// Intercept the course file upload API call and wait for the API request to be successfully completed
		cy.wait("@course_api").then((interception) => {
			expect(interception.response.statusCode).to.eq(200);
		});
	}

	seeFileInFilesList(fileName) {
		cy.get(Files.#cardTitle).contains(fileName).should("be.visible");
	}

	clickOnFileInCourseFiles(fileName) {
		cy.contains('a[data-testid="file-title"]', fileName)
			.should("be.visible")
			.click({ force: true });
	}

	filePreviewIsShown(fileName) {
		cy.get("img#picture, video, audio") // data-testid is not available for media previews
			.filter(":visible")
			.should("have.length.greaterThan", 0)
			.each(($el) => {
				const el = $el[0];
				const tag = el.tagName.toLowerCase();
				if (tag === "img") {
					expect(el.naturalWidth, "Image should be loaded").to.be.gt(0);
					const alt = $el.attr("alt");
					if (alt)
						expect(alt, "Alt text should contain file name").to.include(
							fileName
						);
				} else if (["video", "audio"].includes(tag)) {
					cy.wrap(el).should(($media) => {
						// Wait until metadata is available
						expect(
							$media[0].readyState,
							`${tag} metadata loaded`
						).to.be.greaterThan(0);
						expect(
							$media[0].duration,
							`${tag} has duration`
						).to.be.greaterThan(0);
					});
				}
			});
	}

	clickOnPreviewedFile() {
		cy.get("img#picture, video, audio").filter(":visible").first().click(); // data-testid is not available for media previews
	}

	deleteCourseFolder(folderName) {
		cy.get(Files.#courseFolderDelete)
			.filter((i, el) => el.getAttribute("data-file-name") === folderName)
			.click();
	}

	clickOnConfirmDeleteCourseFileOnModal() {
		cy.get(Files.#dialogNewFolder)
			.last()
			.within(() => {
				cy.get(Files.#confirmDeleteFile).click();
			});
	}

	editbuttonCourseFolderName(folderName) {
		cy.get(Files.#courseFolderNameEdit)
			.filter((i, el) => el.getAttribute("data-directory-name") === folderName)
			.click();
	}

	renameFolderName(folderName) {
		cy.get(Files.#dialogNewFolder)
			.filter(":visible")
			.within(() => {
				cy.get(Files.#folderRenameTextField)
					.should("be.visible")
					.clear({ force: true })
					.type(folderName, { force: true }); // sometimes the typing fails if not forced
			});
	}
}
export default Files;
