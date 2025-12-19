import { BeforeAll, Then } from "@badeball/cypress-cucumber-preprocessor";
import CommonCartridge from "../../pages/common_cartridge/pageCommonCartridge";

const commonCartridge = new CommonCartridge();

BeforeAll(function () {
  this.orgs = {};
});

Then("I have a file exported with pattern {string} and rename it", function (pattern) {
  commonCartridge.verifyFile(pattern, CommonCartridge.fileName, 15000);
});

Then(
  "a manifest exists in the common cartridge file with version {string} and title {string}",
  function (version, title) {
    commonCartridge.hasManifest(version, title);
  }
);

Then(
  "an organization exists on level {int} with title {string} as {string}",
  function (depth, title, name) {
    commonCartridge.hasOrganization(depth, title).then(function (id) {
      this.orgs[name] = id;
    });
  }
);

Then(
  "the {string} organization has child with title {string} as {string}",
  function (parentName, title, childName) {
    commonCartridge.hasChild(this.orgs[parentName], title).then(function (id) {
      this.orgs[childName] = id;
    });
  }
);

Then(
  "the {string} organization has a webcontent resource with pattern {string}",
  function (name, pattern) {
    commonCartridge.hasWebcontent(this.orgs[name], pattern);
  }
);

Then(
  "the {string} organization has a weblink resource with url {string} and title {string}",
  function (name, url, title) {
    commonCartridge.hasWeblink(this.orgs[name], url, title);
  }
);
