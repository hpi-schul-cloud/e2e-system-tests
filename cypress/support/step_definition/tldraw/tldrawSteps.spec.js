import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Tldraw } from "../../pages/tldraw/pageTldraw";

const tldraw = new Tldraw();

When("I click on the pencil tool", () => {
	tldraw.selectPencilTool();
});

When("I click on the text tool", () => {
	tldraw.selectTextTool();
});

When("I draw a line on the canvas with startpoint {string}, {string} and endpoint {string}, {string}", (startX, startY, endX, endY) => {
	tldraw.drawLine(startX,startY,endX,endY);
});

When("I type text {string} on the canvas on position {string}, {string}", (text, posX, posY) => {
	tldraw.typeText(text, posX, posY);
});

Then("I should see the line drawn", () => {
	tldraw.checkLine();
});

Then("I should see the text {string} drawn", (text) => {
	tldraw.checkText(text);
});
