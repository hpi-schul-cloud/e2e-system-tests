"use strict";

const migrationFeature = "oauthProvisioningEnabled";
const mandatorySwitch = '[data-testid="migration-mandatory-switch"]';
const migrationPanel = '[data-testid="migration-panel"]';

// school and migration data are shared between the steps of one scenario
const migrationState = {
	schoolId: undefined,
	schoolNumber: undefined,
	featuresBeforeMigration: undefined,
	migration: undefined,
	previousMigrationId: undefined,
};

class UserLoginMigration {
	getSchool() {
		cy.wrap(migrationState).its("schoolId").should("be.a", "string");
		return cy.then(() =>
			cy
				.request(`/api/v3/school/id/${migrationState.schoolId}`)
				.then((response) => {
					expect(response.status).to.eq(200);
					return response.body;
				})
		);
	}

	getMigration() {
		cy.wrap(migrationState).its("schoolId").should("be.a", "string");
		return cy.then(() =>
			cy
				.request({
					url: `/api/v3/user-login-migrations/schools/${migrationState.schoolId}`,
					failOnStatusCode: false,
				})
				.then((response) => {
					if (response.status === 404) {
						return null;
					}
					expect(response.status).to.eq(200);
					return response.body;
				})
		);
	}

	prepareSchoolWithOfficialSchoolNumber() {
		cy.request("/api/v3/me").then((response) => {
			expect(response.status).to.eq(200);
			migrationState.schoolId = response.body.school.id;
		});
		this.getSchool().then((school) => {
			if (school.officialSchoolNumber) {
				migrationState.schoolNumber = school.officialSchoolNumber;
				return;
			}
			// school api schools have no official school number, which is required to start a migration
			const schoolNumber = `CY${Date.now()}`;
			cy.request({
				method: "PATCH",
				url: `/api/v3/school/${migrationState.schoolId}`,
				body: { officialSchoolNumber: schoolNumber },
			}).then((patchResponse) => {
				expect(patchResponse.status).to.eq(200);
				migrationState.schoolNumber = schoolNumber;
			});
		});
		this.getSchool().then((school) => {
			expect(school.officialSchoolNumber).to.eq(migrationState.schoolNumber);
			expect(school.features, "school features").not.to.include(migrationFeature);
			migrationState.featuresBeforeMigration = school.features;
		});
		// the client loads the school once, so it has to be reloaded to know the school number
		cy.reload();
	}

	verifyNoMigration() {
		this.getMigration().then((migration) => {
			expect(migration, "user login migration").to.be.null;
		});
		this.getSchool().then((school) => {
			expect(school.officialSchoolNumber).to.eq(migrationState.schoolNumber);
			expect([...school.features].sort(), "school features").to.deep.equal(
				[...migrationState.featuresBeforeMigration].sort()
			);
		});
	}

	verifyRunningMigration(mandatory) {
		this.getMigration().then((migration) => {
			expect(migration, "user login migration").to.exist;
			expect(migration.startedAt, "startedAt").to.be.a("string");
			expect(migration.targetSystemId, "targetSystemId").to.be.a("string");
			// optional dates have to be removed and not stored as null or kept from a previous state
			expect(migration, "closed migration").not.to.have.any.keys(
				"closedAt",
				"finishedAt"
			);
			if (mandatory) {
				expect(migration.mandatorySince, "mandatorySince").to.be.a("string");
			} else {
				expect(migration, "mandatory migration").not.to.have.property(
					"mandatorySince"
				);
			}
			if (migrationState.migration?.id === migration.id) {
				expect(migration.startedAt, "unchanged startedAt").to.eq(
					migrationState.migration.startedAt
				);
				expect(migration.targetSystemId).to.eq(
					migrationState.migration.targetSystemId
				);
			}
			migrationState.migration = migration;
		});
		this.getSchool().then((school) => {
			expect(school.features, "school features").to.include(migrationFeature);
			expect([...school.features].sort(), "school features").to.deep.equal(
				[...migrationState.featuresBeforeMigration, migrationFeature].sort()
			);
		});
	}

	rememberMigrationId() {
		cy.wrap(migrationState).its("migration.id").should("be.a", "string");
		cy.then(() => {
			migrationState.previousMigrationId = migrationState.migration.id;
		});
	}

	verifyNewMigrationWasStarted() {
		this.getMigration().then((migration) => {
			expect(migration, "user login migration").to.exist;
			expect(migration.id, "id of the new migration").not.to.eq(
				migrationState.previousMigrationId
			);
		});
	}

	interceptMigrationRequests() {
		cy.intercept("POST", "**/api/v3/user-login-migrations/start").as(
			"migration_start_api"
		);
		cy.intercept("PUT", "**/api/v3/user-login-migrations/mandatory").as(
			"migration_mandatory_api"
		);
		cy.intercept("POST", "**/api/v3/user-login-migrations/close").as(
			"migration_close_api"
		);
	}

	waitForMigrationRequest(action) {
		const aliases = {
			start: "@migration_start_api",
			mandatory: "@migration_mandatory_api",
			close: "@migration_close_api",
		};
		expect(aliases[action], `migration request '${action}'`).to.exist;
		cy.wait(aliases[action]).its("response.statusCode").should("be.within", 200, 299);
	}

	uncheckMigrationMandatorySwitch() {
		cy.get(mandatorySwitch).find("input").uncheck({ force: true });
	}

	reloadAndOpenMigrationPanel() {
		cy.reload();
		cy.get(migrationPanel).should("be.visible").click();
	}
}

export default UserLoginMigration;
