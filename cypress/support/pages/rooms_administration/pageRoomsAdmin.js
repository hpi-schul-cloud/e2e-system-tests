class RoomsAdmin {
	static #roomAdministrationLink = '[data-testid="sidebar-management"]';
	static #submenuRoomAdminLink = '[data-testid="sidebar-management-rooms"]';
	static #roomOwnerAlertIcon = '[data-testid="room-admin-table-owner-not-existing"]';
	static #memberRowInRoomAdministrationTable = '[data-testid^="kebab-menu-room"]';
	static #roomsTableName = '[data-testid="room-admin-table"]';
	static #threeDotMenuForRoom = '[data-testid^="kebab-menu-room-"]';
	static #threeDotMenuDelete = '[data-testid^="menu-delete-room-"]';
	static #threeDotMenuManageRoomMembers = '[data-testid^="menu-manage-room-"]';
	static #adminRoomTitle = '[data-testid="admin-room-detail-title"]';
	static #adminParticipantTable = '[data-testid="room-admin-members-table"]';
	static #deletionConfirmationModalTitle = '[data-testid="delete-dialog-item"]';
	static #confirmButtonOnModal = '[data-testid="dialog-confirm"]';

	navigateToRoomsAdministrationPageViaSubmenu() {
		cy.get(RoomsAdmin.#roomAdministrationLink).should("be.visible");
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
}

export default RoomsAdmin;
