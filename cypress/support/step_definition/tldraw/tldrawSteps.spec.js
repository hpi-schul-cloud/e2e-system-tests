import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Tldraw } from "../../pages/tldraw/pageTldraw";

const tldraw = new Tldraw();

When("I click on the icon Pencil tool", () => {
  tldraw.selectPencilTool();
});

When("I click on the icon Text tool", () => {
  tldraw.selectTextTool();
});

When("I click on the icon Image tool", () => {
  tldraw.selectImageTool();
});

When("I click on icon delete", () => {
  tldraw.removeElement();
});

When(
  "I draw a line on the canvas with start point {string}, {string} and endpoint {string}, {string}",
  (startX, startY, endX, endY) => {
    tldraw.drawLine(startX, startY, endX, endY);
  }
);

When(
  "I type text {string} on the canvas on position {string}, {string}",
  (text, posX, posY) => {
    tldraw.typeText(text, posX, posY);
  }
);

Then("I should see the line drawn", () => {
  tldraw.checkLine();
});

Then("I do not see the text {string}", (text) => {
  tldraw.checkTextNotExisting();
});

Then("I should see the text {string} drawn", (text) => {
  tldraw.checkText(text);
});

When("I click on the text {string}", (text) => {
  tldraw.clickOnText(text);
});

When("I click the icon Undo", () => {
  tldraw.undoLastAction();
});

When("I click the icon Redo", () => {
  tldraw.redoLastAction();
});
