const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
import CCImportCourseModal from "../../pages/course/pageCCImportCourseModal";

const ccImportModal = new CCImportCourseModal();


When("I select the fixture file {string}", (fixture) => {
    ccImportModal.selectFixtureForImport(fixture);
})

When("I start the import", () => {
    ccImportModal.startImport();
})

Then("I see the loading bar", () => {
    ccImportModal.seeLoadingBar();
})

When("I wait for the loading bar to close", () => {
    ccImportModal.waitForImportFinish();
})