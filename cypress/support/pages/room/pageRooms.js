"use strict";

class Rooms {
	static #pageTitle = '[data-testid="page-title"]';
	static #roomTitle = '[data-testid="room-title"]';
	static #roomNameInput = '[data-testid="room-name-input"]';
	// for getting to the room overview from new client:
	// static #goToRoomOverviewButton = '[data-testid="Rooms"]';
	static #roomDetailFAB = '[data-testid="room-menu"]';
	static #roomDetailFABEdit = '[data-testid="room-action-edit"]';
	static #roomDetailFABParticipants = '[data-testid="room-action-manage-participants"]';
	static #roomDetailFABDelete = '[data-testid="room-action-delete"]';
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
	static #roomOverviewNavigationButton = '[data-testid="Rooms"]';

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
		cy.get(Rooms.#roomTitle).contains("Teilnehmende verwalten");
	}

	navigateToRoom(roomName) {
		cy.contains(roomName).should("be.visible").and("contain.text", roomName).click();
	}

	openThreeDotMenuForRoom() {
		cy.get(Rooms.#roomDetailFAB).click();
	}

	openEditInThreeDotMenuForRoom() {
		cy.get(Rooms.#roomDetailFABEdit).click();
	}

	openParticipantsInThreeDotMenuForRoom() {
		cy.get(Rooms.#roomDetailFABParticipants).click();
	}

	openDeleteInThreeDotMenuForRoom() {
		cy.get(Rooms.#roomDetailFABDelete).click();
	}

	seeConfirmationModalForRoomDeletion() {
		cy.get(Rooms.#confirmDeletionModalTitle).should("exist");
	}

	seeModalForAddParticipants() {
		cy.get(Rooms.#addParticipantsModal).should("exist");
	}

	clickDeleteInConfirmationModal() {
		cy.get(Rooms.#confirmDeletionModalDelete).click();
	}

	roomIsNotVisiblOnOverviewPage(roomName) {
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

	selectParticipantName(participantName) {
		cy.get(Rooms.#addParticipantName).should("be.visible").select(participantName);
	}

	addParticipant() {
		cy.get(Rooms.#btnAddParticipant).click();
	}

	seeParticipantInList(participantName) {
		cy.get(Rooms.#participantTable).contains(participantName);
	}
}
export default Rooms;
