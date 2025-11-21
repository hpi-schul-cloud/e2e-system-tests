"use strict";

class Rooms {
	static #pageTitle = '[data-testid="page-title"]';
	static #roomTitle = '[data-testid="room-title"]';
	static #roomNameInput = '[data-testid="room-name-input"]';
	static #roomOverviewNavigationButton = '[data-testid="sidebar-rooms"]';
	static #roomDetailFAB = '[data-testid="room-menu"]';
	static #addContentButton = '[data-testid="add-content-button"]';
	static #deletionConfirmationModalTitle = '[data-testid="delete-dialog-item"]';
	static #modal = '[data-testid="dialog"]';
	static #confirmButtonOnModal = '[data-testid="dialog-confirm"]';
	static #addParticipantsModal = '[data-testid="dialog-add-participants"]';
	static #addParticipantSchool = '[data-testid="add-participant-school"]';
	static #addParticipantRole = '[data-testid="add-participant-role"]';
	static #addParticipantName = '[data-testid="add-participant-name"]';
	static #btnSubmit = '[data-testid="room-form-save-btn"]';
	static #btnAddParticipant = '[data-testid="add-participant-save-btn"]';
	static #createRoom = '[data-testid="fab-add-room"]';
	static #addParticipants = '[data-testid="fab-add-members"]';
	static #participantTable = '[data-testid="participants-table"]';
	static #colourPickerForRoom = '[data-testid="color-swatch-red"]';
	static #inputStartDateForRoom = '[data-testid="room-start-date-input"]';
	static #inputEndDateForRoom = '[data-testid="room-end-date-input"]';
	static #videoConferenceCheckbox = '[data-testid="room-video-conference-checkbox"]';
	static #memberRowInRoomMembershipTable = '[data-testid^="kebab-menu-"]';
	static #changeRolePermissionButton =
		'[data-testid="kebab-menu-action-change-permission"]';
	static #dialogChangeRoleParticipants =
		'[data-testid="dialog-change-role-participants"]';
	static #infoTextBannerInRoomMembersTable = '[data-testid="info-text"]';
	static #firstColumnInRoomMembersTable = ".v-checkbox-btn";
	static #roomLeaveDialogBox = '[data-testid="dialog-title"]';
	static #infoTextForAdmin = '[class="alert-text"]';
	static #modalDuplicateRoom = '[data-testid="copy-info-dialog"]';
	static #modalTitleDuplicateRoom = '[data-testid="copy-info-dialog-title"]';
	static #cancelButtonDuplicateRoom = '[data-testid="copy-info-dialog-cancel"]';
	static #duplicateButton = '[data-testid="copy-info-dialog-confirm"]';
	static #successAlertDuplicateRoom = '[data-testid="alert-text"]';
	static #tabRoomInvitations = '[data-testid="room-members-tab-invitations"]';
	static #tabRoomConfirmations = '[data-testid="room-members-tab-confirmations"]';
	static #tabRoomMembers = '[data-testid="room-members-tab-members"]';
	static #fabButtonInviteMembers = '[data-testid="fab-invite-members"]';
	static #modalCreateInvitationLink = '[data-testid="dialog-invite-participants"]';
	static #inputInviteMembersDescription =
		'[data-testid="invite-participant-description-input"]';
	static #inputInviteMembersRequireConfirmation =
		'[data-testid="input-invite-participants-requires-confirmation"]';
	static #modalCreateInvitationLinkSave = '[data-testid="invite-participant-save-btn"]';
	static #CreateInvitationLinkResult = '[data-testid="share-course-result-url"]';
	static #modalCreateInvitationLinkClose =
		'[data-testid="invite-participant-close-btn"]';
	static #roomInvitationsTable = '[data-testid="data-table"]';
	static #roomInvitationStatusMessage = '[data-testid="status-message"]';
	static #threeDotMenuOfRowInRoomConfirmationsTable = '[data-testid^="kebab-menu-"]';
	static #threeDotMenuConfirm = '[data-testid^="kebab-menu-confirm"]';
	static #roomRoleDropdownOverlay = ".v-overlay-container .v-list-item";
	static #roomNameInModalRoomImport = '[data-testid="import-modal-name-input"]';
	static #infoBoxContentRestriction = '[data-testid="share-options-table-header"]';
	static #roomLockedMessage = '[data-testid="img-permission"]';
	static #btnRoomDelete = '[data-testid="kebab-menu-action-delete"]';
	static #noRoomsMessage = '[data-testid="empty-state"]';

	deleteElementsWithText(textSelector, roomName) {
		cy.get("body").then(($body) => {
			if ($body.find(Rooms.#noRoomsMessage).length) {
				cy.log("No rooms available to delete. Test will exit.");
				return;
			} else {
				this.findAndDeleteRooms(textSelector, roomName);
			}
		});
	}

	findAndDeleteRooms(textSelector, roomName) {
		const roomRegex = new RegExp(`^${roomName}.*$`, "i");

		cy.get(textSelector).then(($elements) => {
			const matchingElements = Cypress.$($elements).filter((_, el) =>
				roomRegex.test(Cypress.$(el).text().trim())
			);

			if (matchingElements.length > 0) {
				cy.log(`Found ${matchingElements.length} rooms matching "${roomName}"`);
				this.deleteRoom(textSelector, roomName);
			} else {
				cy.log(`No more rooms found with name "${roomName}".`);
			}
		});
	}

	deleteRoom(textSelector, roomName) {
		// open the room detail page
		cy.contains(textSelector, new RegExp(`^${roomName}.*$`, "i"))
			.scrollIntoView()
			.should("be.visible")
			.click();

		// perform deletion inside detail view
		cy.get(Rooms.#roomDetailFAB).should("be.visible").click();
		cy.get(Rooms.#btnRoomDelete).should("be.visible").click();
		cy.get(Rooms.#deletionConfirmationModalTitle).should("exist");
		cy.get(Rooms.#confirmButtonOnModal).should("be.visible").click();

		// wait for page update
		cy.wait(2000);

		// recurse until all rooms with this name are deleted
		cy.get("body").then(($body) => {
			if ($body.text().includes(roomName)) {
				this.deleteElementsWithText(textSelector, roomName);
			} else {
				cy.log(`All rooms with name "${roomName}" deleted successfully.`);
			}
		});
	}

	verifyRoomDeletion(roomName, position = null) {
		if (position !== null) {
			const roomTitleSelector = `[data-testid="room--title-${position}"]`;

			cy.get("body").then(($body) => {
				const $room = $body.find(roomTitleSelector);

				// if that position no longer exists at all, we consider it deleted
				if ($room.length === 0) {
					cy.log(
						`Room at position ${position} does not exist. Deletion verified.`
					);
					return;
				}

				// if it exists, assert it no longer has that name
				cy.wrap($room).should("not.contain.text", roomName);
			});
		} else {
			// global check: no room titles contain this name anymore
			cy.get("body").then(($body) => {
				const $titles = $body.find('[data-testid^="room--title-"]');

				// no rooms at all → also OK
				if ($titles.length === 0) {
					cy.log(
						`No room titles found. All rooms with name "${roomName}" deleted successfully (or no rooms exist).`
					);
					return;
				}

				// assert none of the remaining titles contain the name
				Cypress.$($titles).each((_, el) => {
					expect(Cypress.$(el).text().trim()).not.to.contain(roomName);
				});

				// optional: double-check via page text
				if (!$body.text().includes(roomName)) {
					cy.log(`All rooms with name "${roomName}" deleted successfully.`);
				}
			});
		}
	}

	deleteAllRoomsWithName(roomName) {
		cy.get("body").then(($body) => {
			const $titles = $body.find('[data-testid^="room--title-"]');

			// if there are no room title elements at all, just verify deletion and exit
			if ($titles.length === 0) {
				this.verifyRoomDeletion(roomName);
				return;
			}

			const titlesArray = Cypress.$($titles).toArray();

			const matchingIndexes = titlesArray
				.map((el, idx) => ({ el, idx }))
				.filter(({ el }) => Cypress.$(el).text().trim().includes(roomName))
				.map(({ idx }) => idx);

			// no rooms with that name → verify and exit
			if (matchingIndexes.length === 0) {
				this.verifyRoomDeletion(roomName);
				return;
			}

			// delete ONE matching room, then reload and recursively continue
			const position = matchingIndexes[0];
			const roomTitleSelector = `[data-testid="room--title-${position}"]`;
			const openButtonSelector = `[data-testid="room-open-button-${position}"]`;

			cy.get(roomTitleSelector)
				.should("be.visible")
				.should("contain.text", roomName);

			cy.get(openButtonSelector).should("be.visible").click();
			cy.get(Rooms.#roomDetailFAB).should("be.visible").click();
			cy.get(Rooms.#btnRoomDelete).should("be.visible").click();
			cy.get(Rooms.#deletionConfirmationModalTitle).should("exist");
			cy.get(Rooms.#confirmButtonOnModal).should("be.visible").click();
			cy.wait(2000);

			cy.reload().then(() => {
				this.deleteAllRoomsWithName(roomName);
			});
		});
	}

	seeLockIconInRoom(roomName, position) {
		const roomTitleSelector = `[data-testid="room--title-${position}"]`;
		const badgeSelector = `[data-testid="room-badge-lock-${position}"]`;

		// verify the room title by position
		cy.get(roomTitleSelector).contains(roomName).should("be.visible");

		// verify the badge (lock icon or status icon)
		cy.get(badgeSelector).should("be.visible");
	}

	clickLockedRoom(roomName) {
		cy.contains(Rooms.#roomTitle, roomName)
			.should("be.visible")
			.then((title) => {
				cy.wrap(title).prev().click();
			});
	}

	seeRoomNotAccessibleMessage() {
		cy.get(Rooms.#roomLockedMessage).should("be.visible");
	}

	seeContentRestrictionInfoBoxInModal() {
		cy.get(Rooms.#infoBoxContentRestriction).should("be.visible");
	}

	seeRoomNameInImportModal() {
		cy.get(Rooms.#roomNameInModalRoomImport).should("be.visible");
	}

	enterNewRoomNameInImportModal(roomName) {
		cy.get(Rooms.#roomNameInModalRoomImport).clear().type(roomName);
	}

	clickOnImportConfirmButtonInModal() {
		cy.get(Rooms.#confirmButtonOnModal).click();
	}

	seeDuplicateRoomSuccessAlert() {
		cy.get(Rooms.#successAlertDuplicateRoom).should("be.visible");
	}

	seeDuplicationModal() {
		cy.get(Rooms.#modalDuplicateRoom).should("be.visible");
	}

	seeDuplicationModalModalTitle() {
		cy.get(Rooms.#modalTitleDuplicateRoom).should("exist");
	}

	clickCancelButtonOnDuplicationModal() {
		cy.get(Rooms.#cancelButtonDuplicateRoom).click();
	}

	duplicationModalShouldNotBeVisible() {
		cy.get(Rooms.#modalDuplicateRoom).should("not.exist");
	}

	clickDuplicateButtonInModal() {
		cy.get(Rooms.#duplicateButton).click();
	}

	inputDateForRoom(selector, formattedDate) {
		// here comes issue with date picker
		// it gets shovels first digit of the date
		// if we use this solution

		// cy.get(Rooms.#inputEndDateForRoom)
		// 	.type("{esc}")
		// 	.type(formattedDate);

		// so if you type 13.03.2025
		// it will be typed as 30.32.025

		cy.get(selector)
			.find("input")
			.should("exist")
			.invoke("val", formattedDate)
			.trigger("input")
			.trigger("change")
			.trigger("blur")
			.should("have.value", formattedDate);
	}

	selectEndDateForRoom() {
		const currentDate = new Date();
		//set the date which is two days later than the current day
		const nextLaterDate = new Date(currentDate);
		nextLaterDate.setDate(currentDate.getDate() + 2);

		//Get the day, month, and year of the later date
		const day = nextLaterDate.getDate();
		const month = nextLaterDate.getMonth() + 1;
		const year = nextLaterDate.getFullYear();

		//Format the date as DD.MM.YYYY
		const formattedDate = `${String(day).padStart(2, "0")}.${String(month).padStart(2, "0")}.${year}`;
		this.inputDateForRoom(Rooms.#inputEndDateForRoom, formattedDate);
	}

	selectTodayStartDateForRoom() {
		//Get today's date with the format as DD.MM.YYYY
		const today = new Date();
		const day = String(today.getDate()).padStart(2, "0");
		const month = String(today.getMonth() + 1).padStart(2, "0");
		const year = today.getFullYear();
		const formattedDate = `${day}.${month}.${year}`;
		this.inputDateForRoom(Rooms.#inputStartDateForRoom, formattedDate);
	}

	selectRoomColour() {
		cy.get(Rooms.#colourPickerForRoom).click();
	}
	navigateToRoomsOverview() {
		cy.get(Rooms.#roomOverviewNavigationButton).click();
	}

	clickOnCreateRoomFAB() {
		cy.get(Rooms.#createRoom).click();
	}

	clickOnAddParticipantsFAB() {
		cy.get(Rooms.#addParticipants).click();
	}

	showRoomCreationPage() {
		cy.get(Rooms.#pageTitle).should("exist").and("contain.text", "Raum erstellen");
	}

	showRoomEditPage(roomName) {
		cy.get(Rooms.#pageTitle).should("exist").and("contain.text", "Raum bearbeiten");
		cy.get(Rooms.#roomNameInput + ` input`).should("have.value", roomName);
	}

	fillRoomFormName(newRoomName) {
		cy.get(Rooms.#roomNameInput).type("{selectall}{backspace}{selectall}{backspace}");
		cy.get(Rooms.#roomNameInput).type(newRoomName);
	}

	submitRoom() {
		cy.get(Rooms.#btnSubmit).click();
	}

	seeRoomDetailPage(newRoomName) {
		cy.get(Rooms.#roomTitle).contains(newRoomName);
	}

	seeRoomEditParticipantsPage() {
		cy.get(Rooms.#roomTitle).should("be.visible");
		cy.wait("@room_members_api");
	}

	checkVideoConferenceCheckbox() {
		cy.get(Rooms.#videoConferenceCheckbox).find("div div input").check();
	}

	uncheckVideoConferenceCheckbox() {
		cy.get(Rooms.#videoConferenceCheckbox).find("div div input").uncheck();
	}

	seeVideoConferenceCheckboxIsChecked() {
		cy.get(Rooms.#videoConferenceCheckbox)
			.find("input[type='checkbox']")
			.should("be.checked");
	}

	seeVideoConferenceCheckboxIsUnchecked() {
		cy.get(Rooms.#videoConferenceCheckbox)
			.find("input[type='checkbox']")
			.should("not.be.checked");
	}

	navigateToRoom(roomName, position) {
		// dynamically construct the title and button selectors based on the position
		const roomTitleSelector = `[data-testid="room--title-${position}"]`;
		const openButtonSelector = `[data-testid="room-open-button-${position}"]`;

		// verify the room title by position
		cy.get(roomTitleSelector)
			.contains(roomName) // Ensure that the room title matches the room name
			.should("be.visible");

		// click the "Open" button for the room at the given position
		cy.get(openButtonSelector).click();
	}

	openThreeDotMenuForRoom() {
		cy.get(Rooms.#roomDetailFAB).first().click();
	}

	clickOnKebabMenuAction(kebabMenuAction) {
		cy.get(
			`[data-testid="kebab-menu-action-${kebabMenuAction.toLowerCase()}"]`
		).click();
	}

	seeConfirmationModalForRoomDeletion() {
		cy.get(Rooms.#deletionConfirmationModalTitle).should("exist");
	}

	seeConfirmationModalForFileDeletion() {
		cy.get(Rooms.#modal).should("exist");
	}

	seeModalForAddParticipants() {
		cy.get(Rooms.#addParticipantsModal).should("exist");
	}

	// The following code finds and clicks the dialog with the highest z-index value.
	// - First, it collects all the dialog elements.
	// - It then sorts the dialogs in descending order based on their z-index, so the dialog on top (with the highest z-index) comes first.
	// - If there is only one dialog, it will automatically be selected as the highest.
	// - The script then clicks on the dialog with the highest z-index, ensuring that the most visible dialog is interacted with.
	clickDeleteInConfirmationModal() {
		cy.get(Rooms.#deletionConfirmationModalTitle).then((dialogs) => {
			const highestZIndexDialog = dialogs.toArray().sort((dialogA, dialogB) => {
				return (
					parseInt(Cypress.$(dialogB).css("z-index")) -
					parseInt(Cypress.$(dialogA).css("z-index"))
				);
			})[0];
			cy.wrap(highestZIndexDialog).find(Rooms.#confirmButtonOnModal).click();
		});
	}

	roomIsVisibleOnOverviewPage(roomName) {
		cy.contains(roomName).should("exist");
	}

	roomIsNotVisibleOnOverviewPage(roomName) {
		cy.contains(roomName).should("not.exist");
	}

	seeSchoolOfParticipant(participantSchool) {
		cy.get(Rooms.#addParticipantSchool).contains(participantSchool);
	}

	fillParticipantFormSchool(participantSchool) {
		cy.get(Rooms.#addParticipantSchool)
			.type("{selectall}{backspace}")
			.type(participantSchool);
	}

	selectParticipantSchool() {
		cy.get(Rooms.#addParticipantSchool)
			.should("be.visible")
			.type("{downArrow}{enter}");
	}

	seeRoleOfParticipant(participantRole) {
		cy.get(Rooms.#addParticipantRole).contains(participantRole);
	}

	notSeeRoleOfParticipant(participantRole) {
		cy.get(Rooms.#addParticipantRole).contains(participantRole).should("not.exist");
	}

	fillParticipantFormName(participantName) {
		cy.get(Rooms.#addParticipantName).type(participantName);
	}

	selectParticipantName() {
		cy.get(Rooms.#addParticipantName)
			.should("be.visible")
			.type("{downArrow}{enter}")
			.type("{esc}");
	}

	addParticipant() {
		cy.get(Rooms.#btnAddParticipant).click();
	}

	// This method performs a specified action from the kebab menu for a given participant.
	// - It accepts a participant name and an action (such as "remove-member" or "change-permission").
	// - The participant's row in the table is located based on the provided name.
	// - The corresponding kebab menu for that participant is clicked.
	// - The specified action is performed by clicking on the appropriate option in the kebab menu.
	performKebabMenuActionOnParticipantInRoomMembershipTable(
		kebabMenuAction,
		participantName
	) {
		cy.get(Rooms.#participantTable)
			.contains("td", participantName)
			.parents("tr")
			.within(() => {
				cy.get(Rooms.#memberRowInRoomMembershipTable).click();
			});
		cy.get(
			`[data-testid="kebab-menu-action-${kebabMenuAction.toLowerCase()}"]`
		).click();
	}

	seeParticipantInList(participantName) {
		cy.get(Rooms.#participantTable).contains(participantName);
	}

	notSeeParticipantInList(participantName) {
		cy.get(Rooms.#participantTable).should("not.contain", participantName);
	}
	clickOnAddContentButton() {
		cy.get(Rooms.#addContentButton).click();
	}

	clickOnThreeDotMenuToEditUser(participantName) {
		cy.contains("td", participantName)
			.parent()
			.within(() => {
				cy.get(Rooms.#memberRowInRoomMembershipTable).click();
			});
	}

	isChangeRolePermissionButtonVisible() {
		cy.get(Rooms.#changeRolePermissionButton).should("be.visible");
	}

	clickOnButtonActionMenuInSubMenu(buttonAction) {
		var buttonAction = buttonAction.replace(/ /g, "-");
		cy.get(`[data-testid="kebab-menu-action-${buttonAction.toLowerCase()}"]`).click();
	}

	isChangeRolePermissionDialogVisible() {
		cy.get(Rooms.#dialogChangeRoleParticipants).should("be.visible");
	}

	changeRoleOfTheUser(role) {
		cy.get(`[data-testid="change-role-option-${role}"]`).click();
	}
	isChangedRoleVisible(role) {
		cy.get(`[data-testid="change-role-option-${role}"]`)
			.find("input[type='radio']")
			.should("be.checked");
	}

	confirmChangeRoleModalActions(buttonAction, roleType) {
		cy.get(
			`[data-testid="change-${roleType.toLowerCase()}-${buttonAction.toLowerCase()}-btn"]`
		).click();
		cy.wait(500);
	}

	isRoomLeaveDialogBoxVisible() {
		cy.get(Rooms.#roomLeaveDialogBox).should("be.visible");
	}

	clickOnActionButtonForRoomLeave(buttonAction) {
		cy.get(`[data-testid="dialog-${buttonAction.toLowerCase()}"]`).click();
	}

	isParticipantNotVisible(participantName) {
		cy.get(Rooms.#participantTable)
			.contains("td", participantName)
			.should("not.exist");
	}

	isParticipantVisible(participantName) {
		cy.get(Rooms.#participantTable).contains("td", participantName).should("exist");
	}

	doNotSeeOptionsInMenu(optionsString) {
		// this line done following things:
		// - first remove brackets and quotes if passed
		// - second split into an array based on ", "
		// - and in the last trim spaces
		const options = optionsString
			.replace(/[\[\]"]/g, "")
			.split(", ")
			.map((opt) => opt.trim());
		options.forEach((option) => {
			cy.get(`[data-testid="kebab-menu-action-${option}"]`).should("not.exist");
		});
	}

	doNotSeeFabAddMember() {
		cy.get(Rooms.#addParticipants).should("not.exist");
	}

	doNotSeeInfoTextBanner() {
		cy.get(Rooms.#infoTextBannerInRoomMembersTable).should("not.exist");
	}

	doNotSeeFirstColumnInRoomMembersTable() {
		cy.get(Rooms.#firstColumnInRoomMembersTable).should("not.exist");
	}

	doNotSeeLastColumnInRoomMembersTable() {
		cy.contains("th", "Aktionen").should("not.exist");
	}

	seeFabCreateRoomBoard() {
		cy.get(Rooms.#addContentButton).should("exist").should("be.visible");
	}

	seeFabAddMember() {
		cy.get(Rooms.#addParticipants).should("exist");
	}

	seeInfoTextBannerForAddingMembersIncludingExternalTeachers() {
		cy.get(Rooms.#infoTextBannerInRoomMembersTable).should("be.visible");
		cy.get(Rooms.#infoTextBannerInRoomMembersTable).should(
			"contain.text",
			"Füge Mitglieder zum Raum hinzu. Lernbegleitende anderer Schulen können hinzugefügt werden"
		);
	}

	seeFirstColumnInRoomMembersTable() {
		cy.get(Rooms.#firstColumnInRoomMembersTable).should("exist");
	}

	seeLastColumnInRoomMembersTable() {
		cy.contains("th", "Aktionen").should("exist");
	}

	seeInfoTextForAdmin() {
		cy.get(Rooms.#infoTextForAdmin)
			.should("be.visible")
			.should("contain.text", "Besitzen")
			.and("contain.text", "übertragen");
	}

	selectRoomRoleFromDropdownMenu(participantRole) {
		cy.get(Rooms.#addParticipantRole).type("downArrow");
		cy.get(Rooms.#roomRoleDropdownOverlay).contains(participantRole).click();
		cy.get(Rooms.#addParticipantRole).should("contain", participantRole);
	}

	clickOnTabRoomInvitations() {
		cy.get(Rooms.#tabRoomInvitations).should("be.visible").click();
	}

	clickOnTabRoomConfirmations() {
		cy.get(Rooms.#tabRoomConfirmations).should("be.visible").click();
	}

	clickOnTabRoomMembers() {
		cy.get(Rooms.#tabRoomMembers).should("be.visible").click();
	}

	clickOnInviteParticipantsFAB() {
		cy.get(Rooms.#fabButtonInviteMembers).click();
	}

	seeCreateInvitationLinkModal() {
		cy.get(Rooms.#modalCreateInvitationLink).should("be.visible");
	}

	fillInvitationFormDescription(newDescription) {
		cy.get(Rooms.#inputInviteMembersDescription).clear().type(newDescription);
	}

	uncheckInvitationFormRequireConfirmation() {
		cy.get(Rooms.#inputInviteMembersRequireConfirmation)
			.find('[type="checkbox"]')
			.uncheck();
	}

	checkInvitationFormRequireConfirmation() {
		cy.get(Rooms.#inputInviteMembersRequireConfirmation)
			.find('[type="checkbox"]')
			.check();
	}

	clickInvitationFormSave() {
		cy.get(Rooms.#modalCreateInvitationLinkSave).click();
	}

	seeLinkUrlInInvitationForm() {
		cy.get(Rooms.#CreateInvitationLinkResult).should("be.visible");
	}

	saveTheLinkUrlInInvitationForm() {
		cy.get(Rooms.#CreateInvitationLinkResult)
			.find("input")
			.invoke("attr", "value")
			.then((value) => {
				cy.wrap(value).as("roomInvitationLinkUrl");
			});
	}

	clickInvitationFormClose() {
		cy.get(Rooms.#modalCreateInvitationLinkClose).click();
	}

	seeInvitationLinkInList(linkDescription) {
		cy.get(Rooms.#roomInvitationsTable).contains(linkDescription);
	}

	useSavedLinkUrl() {
		cy.get("@roomInvitationLinkUrl").then((roomInvitationLinkUrl) => {
			cy.visit(roomInvitationLinkUrl);
		});
	}

	seeLinkInvitationStatusMessage() {
		cy.get(Rooms.#roomInvitationStatusMessage).should("be.visible");
	}

	seeUserInConfirmationsTable(userName) {
		cy.get(Rooms.#roomInvitationsTable).contains(userName);
	}

	notSeeUserInConfirmationsTable(userName) {
		cy.get(Rooms.#roomInvitationsTable).should("not.contain", userName);
	}

	clickOnThreeDotMenuForUserInConfirmationsTable(userName) {
		cy.contains("td", userName)
			.parent()
			.within(() => {
				cy.get(Rooms.#threeDotMenuOfRowInRoomConfirmationsTable).click();
			});
	}

	clickConfirmButtonInThreeDotMenu() {
		cy.get(Rooms.#threeDotMenuConfirm).should("be.visible");
		cy.get(Rooms.#threeDotMenuConfirm).click();
	}

	seeDefaultReadPermissionOfTheUser(participantName) {
		cy.get(Rooms.#participantTable)
			.contains("td", participantName)
			.parent()
			.should("contain", "Lesen");
	}
}
export default Rooms;
