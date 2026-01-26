class RoomsAdmin {
	static #roomsAdministrationLink = '[data-testid="sidebar-management"]';
	static #submenuRoomAdminLink = '[data-testid="sidebar-management-rooms"]';
	static #roomOwnerAlertIcon = '[data-testid="room-admin-table-owner-not-existing"]';
	static #roomsTableName = '[data-testid="room-admin-table"]';
	static #threeDotMenuForRoom = '[data-testid^="kebab-menu-room-"]';
	static #threeDotMenuDelete = '[data-testid^="menu-delete-room-"]';
	static #threeDotMenuManageRoomMembers = '[data-testid^="menu-manage-room-"]';
	static #adminRoomTitle = '[data-testid="admin-room-detail-title"]';
	static #adminParticipantTable = '[data-testid="room-admin-members-table"]';
	static #deletionConfirmationModalTitle = '[data-testid="confirmation-dialog-title"]';
	static #confirmButtonOnModal = '[data-testid="confirmation-dialog-confirm"]';

	navigateToRoomsAdministrationPageViaSubmenu() {
		cy.get(RoomsAdmin.#roomsAdministrationLink).should("be.visible");
		cy.get(RoomsAdmin.#submenuRoomAdminLink).should("be.visible").click();
	}

	isRoomsAdministrationPage() {
		cy.url().should("include", "/administration/rooms/manage");
	}

	seeAlertIconInRoomOwnerColumn(roomName) {
		cy.get(RoomsAdmin.#roomsTableName)
			.contains("tr", roomName)
			.within(() => {
				// find the row containing the alert icon
				cy.get(RoomsAdmin.#roomOwnerAlertIcon)
					// second column (Room Owner)
					.should("be.visible");
			});
	}

	seeExternalMemberCountOfRoom(roomName, externalMembersCount) {
		cy.get(RoomsAdmin.#roomsTableName)
			.contains("tr", roomName)
			.within(() => {
				cy.get("td")
					// index based search as no data-testid
					.eq(4)
					.should("contain", externalMembersCount);
			});
	}

	seeInternalMemberCountOfRoom(roomName, internalMembersCount) {
		cy.get(RoomsAdmin.#roomsTableName)
			.contains("tr", roomName)
			.within(() => {
				cy.get("td")
					// index based search as no data-testid
					.eq(3)
					.should("contain", internalMembersCount);
			});
	}

	seeTotalMemberCountOfRoom(roomName, totalMembersCount) {
		cy.get(RoomsAdmin.#roomsTableName)
			.contains("tr", roomName)
			.within(() => {
				cy.get("td")
					// index based search as no data-testid
					.eq(2)
					.should("contain", totalMembersCount);
			});
	}

	seeRoomInRoomsTable(roomName) {
		cy.get(RoomsAdmin.#roomsTableName).should("contain", roomName);
	}

	seeAdminRoomEditParticipantsPage(roomName) {
		cy.get(RoomsAdmin.#adminRoomTitle).should("be.visible");
		cy.get(RoomsAdmin.#adminRoomTitle).should("contain", roomName);
		cy.wait("@room_administration_members_api");
	}

	seeParticipantInAdminList(participantName) {
		cy.get(RoomsAdmin.#adminParticipantTable).contains(participantName);
	}

	doNotSeeParticipantInAdminList(participantName) {
		cy.get(RoomsAdmin.#adminParticipantTable).should("not.contain", participantName);
	}

	doNotSeeRoomInRoomsTable(roomName) {
		cy.get(RoomsAdmin.#roomsTableName).should("not.contain", roomName);
	}

	clickOnThreeDotMenuForRoom(roomName) {
		cy.get(RoomsAdmin.#roomsTableName)
			.contains("tr", roomName)
			.within(() => {
				cy.get(RoomsAdmin.#threeDotMenuForRoom).click();
			});
	}

	clickOnDeleteInThreeDotMenuForRoom() {
		cy.get(RoomsAdmin.#threeDotMenuDelete).should("be.visible");
		cy.get(RoomsAdmin.#threeDotMenuDelete).click();
	}

	clickOnManageRoomMembersInThreeDotMenuForRoom() {
		cy.get(RoomsAdmin.#threeDotMenuManageRoomMembers).should("be.visible");
		cy.get(RoomsAdmin.#threeDotMenuManageRoomMembers).click();
	}

	seeConfirmationModalForRoomDeletionInAdminPage() {
		cy.get(RoomsAdmin.#deletionConfirmationModalTitle).should("exist");
	}

	seeConfirmationModalForUserDeletionInAdminPage() {
		cy.get(RoomsAdmin.#deletionConfirmationModalTitle).should("exist");
	}

	clickRemoveInConfirmationModal() {
		cy.get(RoomsAdmin.#confirmButtonOnModal).click();
	}

	clickOnRemoveInOptions(user) {
		cy.get('[aria-label="' + user + ' aus Raum entfernen"]').should("be.visible");
		cy.get('[aria-label="' + user + ' aus Raum entfernen"]').click();
	}

	clickDeleteInConfirmationModal() {
		cy.get(RoomsAdmin.#confirmButtonOnModal)
			.filter(":visible")
			.first()
			.click({ force: true });
	}
}

export default RoomsAdmin;
