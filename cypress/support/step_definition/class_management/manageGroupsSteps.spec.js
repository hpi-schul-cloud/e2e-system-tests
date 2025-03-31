import Classes from "../../pages/class_management/pageClasses";
import { Then } from "@badeball/cypress-cucumber-preprocessor";

const groups = new Classes();

Then("I see the manage group page", () => {
	groups.seeManageGroupPage();
});

Then("I see the {string} with name {string} {string} in the group member table", (role, lastName, firstName) => {
	groups.seeGroupMemberTableContainsMemberWithRole(role, lastName, firstName);
});

Then("I see the infobox on manage group page", () => {
	groups.seeClassMemberInfoBox();
});
