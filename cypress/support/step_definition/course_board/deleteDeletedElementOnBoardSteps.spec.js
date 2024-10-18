import { When } from "@badeball/cypress-cucumber-preprocessor";
import Board from "../../pages/course_board/pageBoard";

const { Then } = require("@badeball/cypress-cucumber-preprocessor");

const board = new Board();

When("I click on three dot menu on the deleted element", () => {
	board.clickOnThreeDotOnDeletedElement();
});

When("I select the option Delete in three dot menu on the card", () => {
	board.selectDeleteInThreeDotMenu();
});

Then("I cannot see any deleted elements", () => {
	board.canNotSeeDeletedElements();
});
