import { BeforeAll, Given, Then } from "@badeball/cypress-cucumber-preprocessor";

const fileName = "CC_Test_Kurs.imscc";

BeforeAll(function() {
	this.orgs = {}
})

Then("I have a file exported with pattern {string} and rename it", function (pattern) {
	cy.verifyFile(pattern, fileName, 15000);
});

Given("the exported file is an archive and extracted", function () {
	cy.task("commonCartridgeFileIsArchive", {
		directory: Cypress.config("downloadsFolder"),
		file: fileName,
	});
});

Given("extracted content and files are deleted", function () {
	cy.task("commonCartridgeCleanUp", {
		directory: Cypress.config("downloadsFolder"),
		file: fileName,
	});
});

Then(
	"a manifest exists in the common cartridge file with version {string} and title {string}",
	function (version, title) {
		cy.task("commonCartridgeHasManifest", {
			directory: Cypress.config("downloadsFolder"),
			version,
			title,
		});
	}
);

Then(
	"an organization exists on level {int} with title {string} as {string}",
	function (depth, title, name) {
		cy.task("commonCartridgeHasOrganization", {
			directory: Cypress.config("downloadsFolder"),
			depth,
			title,
		}).then(function (id) {
			this.orgs[name] = id;
		});
	}
);

Then(
	"the {string} organization has child with title {string} as {string}",
	function (parentName, title, childName) {
		cy.task("commonCartridgeHasChild", {
			directory: Cypress.config("downloadsFolder"),
			orgId: this.orgs[parentName],
			title,
		}).then(function (id) {
			this.orgs[childName] = id;
		});
	}
);

Then(
	"the {string} organization has a webcontent resource with pattern {string}",
	function (name, pattern) {
		cy.task("commonCartridgeHasWebcontent", {
			directory: Cypress.config("downloadsFolder"),
			orgId: this.orgs[name],
			pattern,
		});
	}
);

Then(
	"the {string} organization has a weblink resource with url {string} and title {string}",
	function (name, url, title) {
		cy.task("commonCartridgeHasWeblink", {
			directory: Cypress.config("downloadsFolder"),
			orgId: this.orgs[name],
			url,
			title,
		});
	}
);
