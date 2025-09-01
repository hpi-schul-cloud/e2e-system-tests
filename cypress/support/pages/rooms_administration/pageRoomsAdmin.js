class RoomsAdmin {
	static #roomAdministrationLink = '[data-testid="sidebar-management"]';
	static #submenuRoomAdminLink = '[data-testid="sidebar-management-rooms"]';
	static #roomOwnerAlertIcon = '[data-testid="room-admin-table-owner-not-existing"]';
	static #memberRowInRoomAdministrationTable = '[data-testid^="kebab-menu-room"]';
	static #roomsTableName = '[data-testid="room-admin-table"]';
	static #pageTitle = '[data-testid="admin-room-detail-title"]';
	static #menuManageRoomPattern = '[data-testid^="menu-manage-room-"]';
	static #participantInMembersTable = '[data-testid="room-admin-members-table"]';

	navigateToRoomsAdministrationPageViaSubmenu() {
		cy.get(RoomsAdmin.#roomAdministrationLink).should("be.visible");
		cy.get(RoomsAdmin.#submenuRoomAdminLink).should("be.visible").click();
	}

	isRoomsAdministrationPage() {
		cy.url().should("include", "/administration/rooms/manage");
	}

	seeAlertIconInRoomOwnerColumn(roomName) {
		cy.get(RoomsAdmin.#roomsTableName)
			// find the row containing the room
			.contains("tr", roomName)
			.within(() => {
				// find the row containing the alert icon
				cy.get(RoomsAdmin.#roomOwnerAlertIcon)
					// second column (Room Owner)
					.should("be.visible");
			});
	}

	seeRoomInRoomsTable(roomName) {
		cy.get(RoomsAdmin.#roomsTableName).should("contain", roomName);
	}

	clickOnMenuManageOption(menuManageOption) {
		cy.get(RoomsAdmin.#menuManageRoomPattern).click();
	}

	seeDetailPageForRoom(roomName) {
		cy.get(RoomsAdmin.#pageTitle).should("contain", roomName);
	}

	seeParticipantInMembersList(participantName) {
		cy.get(RoomsAdmin.#participantInMembersTable).contains(participantName);
	}
	clickOnThreeDotMenuToEditRoom(roomName) {
		cy.contains("td", roomName)
			.parent()
			.within(() => {
				cy.get(RoomsAdmin.#memberRowInRoomAdministrationTable).click();
			});
	}
}

export default RoomsAdmin;
