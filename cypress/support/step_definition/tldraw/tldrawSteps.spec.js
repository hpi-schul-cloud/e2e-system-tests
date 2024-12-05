import { When } from "@badeball/cypress-cucumber-preprocessor";
import { Tldraw } from "../../pages/tldraw/pageTldraw";

const tldraw = new Tldraw();

When("I click on the pencil tool", () => {
	tldraw.selectPencilTool();
});

When("I click on the text tool", () => {
	tldraw.selectTextTool();
});

When("I draw a line on the canvas", () => {
	tldraw.drawALine();
});

When("I type text on the canvas", () => {
	tldraw.typeText();
});
