class RoomsAdmin {
	static #submenuRoomAdminLink = '[data-testid="sidebar-management-rooms"]';
	static #roomOwnerAlertIcon = '[data-testid="room-admin-table-owner-not-existing"]';
	static #roomsTableName = '[data-testid="room-admin-table"]';
	static #threeDotMenuForRoom = '[data-testid^="kebab-menu-room-"]';
	static #threeDotMenuDelete = '[data-testid^="menu-delete-room-"]';
	static #threeDotMenuManageRoomMembers = '[data-testid^="menu-manage-room-"]';
	static #adminRoomTitle = '[data-testid="admin-room-detail-title"]';
	static #deletionConfirmationModalTitle = '[data-testid="delete-dialog-item"]';
	static #confirmButtonOnModal = '[data-testid="dialog-confirm"]';

	navigateToRoomsAdministrationPageViaSubmenu() {
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
		cy.wait("@members_api");
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

	// The following code finds and clicks the dialog with the highest z-index value.
	// - First, it collects all the dialog elements.
	// - It then sorts the dialogs in descending order based on their z-index, so the dialog on top (with the highest z-index) comes first.
	// - If there is only one dialog, it will automatically be selected as the highest.
	// - The script then clicks on the dialog with the highest z-index, ensuring that the most visible dialog is interacted with.
	clickDeleteInConfirmationModal() {
		cy.get(RoomsAdmin.#deletionConfirmationModalTitle).then((dialogs) => {
			const highestZIndexDialog = dialogs.toArray().sort((dialogA, dialogB) => {
				return (
					parseInt(Cypress.$(dialogB).css("z-index")) -
					parseInt(Cypress.$(dialogA).css("z-index"))
				);
			})[0];
			cy.wrap(highestZIndexDialog).find(RoomsAdmin.#confirmButtonOnModal).click();
		});
	}
}

export default RoomsAdmin;
