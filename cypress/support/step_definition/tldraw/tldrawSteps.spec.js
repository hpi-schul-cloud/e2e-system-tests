import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Tldraw } from "../../pages/tldraw/pageTldraw";

const tldraw = new Tldraw();

When("I click on the pencil tool", () => {
	tldraw.selectPencilTool();
});

When("I click on the text tool", () => {
	tldraw.selectTextTool();
});

When("I draw a line on the canvas", () => {
	tldraw.drawLine(100,100,300,300);
});

When("I type text on the canvas", () => {
	tldraw.typeText("Hello World", 500, 500);
});

Then("I should see the line drawn", () => {
	tldraw.checkLine();
});

Then("I should see the text drawn", () => {
	tldraw.checkText("Hello World");
});
