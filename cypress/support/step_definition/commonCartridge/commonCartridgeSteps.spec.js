import { BeforeAll, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import ExportCourses from "../../pages/course/pageExportCourses";

const exportCourses = new ExportCourses();

BeforeAll(function () {
	this.orgs = {}
})

Then("I have a file exported with pattern {string} and rename it", function (pattern) {
	exportCourses.verifyFile(pattern, ExportCourses.fileName, 15000);
});

Given("the exported file is an archive and extracted", function () {
	exportCourses.commonCartridgeFileIsArchive();
});

Given("extracted content and files are deleted", function () {
	exportCourses.commonCartridgeCleanUp();
});

Then(
	"a manifest exists in the common cartridge file with version {string} and title {string}",
	function (version, title) {
		exportCourses.commonCartridgeHasManifest(version, title);
	}
);

Then(
	"an organization exists on level {int} with title {string} as {string}",
	function (depth, title, name) {
		exportCourses.commonCartridgeHasOrganization(depth, title).then(function (id) {
			this.orgs[name] = id;
		});
	}
);

Then(
	"the {string} organization has child with title {string} as {string}",
	function (parentName, title, childName) {
		exportCourses.commonCartridgeHasChild(this.orgs[parentName], title).then(function (id) {
			this.orgs[childName] = id;
		});
	}
);

Then(
	"the {string} organization has a webcontent resource with pattern {string}",
	function (name, pattern) {
		exportCourses.commonCartridgeHasWebcontent(this.orgs[name], pattern);
	}
);

Then(
	"the {string} organization has a weblink resource with url {string} and title {string}",
	function (name, url, title) {
		exportCourses.commonCartridgeHasWeblink(this.orgs[name], url, title);
	}
);
