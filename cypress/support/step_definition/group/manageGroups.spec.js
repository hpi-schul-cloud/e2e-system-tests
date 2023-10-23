import Groups from "../../pages/group/pageGroups";
import {Then, When} from "@badeball/cypress-cucumber-preprocessor";

const groups = new Groups();

When('I click the manage group button', () => {
    groups.clickManageGroupButton();
})

Then('I can see the manage group page', () => {
    groups.seeManageGroupPage();
})

Then('I can see the manage group page title', () => {
    groups.seeManageGroupPageTitle()
})

Then('I can see the group member table', () => {
    groups.seeGroupMemberTable()
})

Then('I can see the {string} with name {string}', (role, lastName) => {
    groups.seeGroupMemberTableContainsMember(role, lastName)
})

Then('I can see the infobox', () => {
    groups.seeClassMemberInfoBox()
})

Then('I can see the infotext', () => {
    groups.seeClassMemberInfoBoxText()
})
