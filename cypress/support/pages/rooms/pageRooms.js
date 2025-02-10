"use strict";

class Rooms {
	static #pageTitle = '[data-testid="page-title"]';
	static #roomTitle = '[data-testid="room-title"]';
	static #roomNameInput = '[data-testid="room-name-input"]';
	static #roomOverviewNavigationButton = '[data-testid="sidebar-rooms"]';
	static #roomDetailFAB = '[data-testid="room-menu"]';
	static #addContentButton = '[data-testid="add-content-button"]';
	static #fabButtonAddBoard = '[data-testid="fab_button_add_board"]';
	static #confirmDeletionModalTitle = '[data-testid="delete-dialog-item"]';
	static #confirmDeletionModalDelete = '[data-testid="dialog-confirm"]';
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
	static #memberRowInRoomMembershipTable = '[data-testid^="kebab-menu-"]';

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
		cy.get(Rooms.#inputEndDateForRoom).clear().type(formattedDate);
	}

	selectTodayStartDateForRoom() {
		//Get today's date with the format as DD.MM.YYYY
		const today = new Date();
		const day = String(today.getDate()).padStart(2, "0");
		const month = String(today.getMonth() + 1).padStart(2, "0");
		const year = today.getFullYear();
		const formattedDate = `${day}.${month}.${year}`;
		cy.get(Rooms.#inputStartDateForRoom).clear().type(formattedDate);
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
	}

	navigateToRoom(roomName) {
		cy.contains(roomName).should("be.visible").and("contain.text", roomName).click();
	}

	openThreeDotMenuForRoom() {
		cy.get(Rooms.#roomDetailFAB).click();
	}

	clickOnKebabMenuAction(kebabMenuAction) {
		cy.get(
			`[data-testid="kebab-menu-action-${kebabMenuAction.toLowerCase()}"]`
		).click();
	}

	seeConfirmationModalForRoomDeletion() {
		cy.get(Rooms.#confirmDeletionModalTitle).should("exist");
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
		cy.get(Rooms.#confirmDeletionModalTitle).then((dialogs) => {
			const highestZIndexDialog = dialogs.toArray().sort((dialogA, dialogB) => {
				return (
					parseInt(Cypress.$(dialogB).css("z-index")) -
					parseInt(Cypress.$(dialogA).css("z-index"))
				);
			})[0];
			cy.wrap(highestZIndexDialog).find(Rooms.#confirmDeletionModalDelete).click();
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

	seeRoleOfParticipant(participantRole) {
		cy.get(Rooms.#addParticipantRole).contains(participantRole);
	}

	fillParticipantFormName(participantName) {
		cy.get(Rooms.#addParticipantName).type(participantName);
	}

	selectParticipantName() {
		cy.get(Rooms.#addParticipantName).should("be.visible").type("{downArrow}{enter}");
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
	seeFabButtonToAddBoard() {
		cy.get(Rooms.#fabButtonAddBoard).should("be.visible");
	}
	clickOnFabButtonToAddBoard() {
		cy.get(Rooms.#fabButtonAddBoard).click();
	}
}
export default Rooms;
